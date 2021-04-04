let StateInline = require('markdown-it/lib/rules_inline/state_inline')
const { isWhiteSpace, isPunctChar, isMdAsciiPunct } = require('markdown-it/lib/common/utils')

StateInline.prototype.customScanDelims = function (start) {
  var pos = start,
    lastChar,
    nextChar,
    count,
    can_open,
    can_close,
    isLastWhiteSpace,
    isLastPunctChar,
    isNextWhiteSpace,
    isNextPunctChar,
    left_flanking = true,
    right_flanking = true,
    max = this.posMax,
    marker = this.src.charCodeAt(start)

  // treat beginning of the line as a whitespace
  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20

  while (pos < max && this.src.charCodeAt(pos) === marker) pos++

  count = pos - start

  // treat end of the line as a whitespace
  nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20

  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar))
  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar))

  isLastWhiteSpace = isWhiteSpace(lastChar)
  isNextWhiteSpace = isWhiteSpace(nextChar)

  if (isNextWhiteSpace) 
    left_flanking = false
  else if (isNextPunctChar) 
    if (!(isLastWhiteSpace || isLastPunctChar)) 
      left_flanking = false
    
  

  if (isLastWhiteSpace) 
    right_flanking = false
  

  can_open = left_flanking
  can_close = right_flanking

  return {
    can_open: can_open,
    can_close: can_close,
    length: count,
  }
}

function postProcess(state, delimiters) {
  var i,
    startDelim,
    endDelim,
    token,
    ch,
    isStrong,
    max = delimiters.length

  for (i = max - 1; i >= 0; i--) {
    startDelim = delimiters[i]

    if (startDelim.marker !== 0x5F/* _ */ && startDelim.marker !== 0x2A/* * */) 
      continue
    

    // Process only opening markers
    if (startDelim.end === -1) 
      continue
    

    endDelim = delimiters[startDelim.end]

    // If the previous delimiter has the same marker and is adjacent to this one,
    // merge those into one strong delimiter.
    //
    // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
    //
    isStrong = i > 0 &&
               delimiters[i - 1].end === startDelim.end + 1 &&
               delimiters[i - 1].token === startDelim.token - 1 &&
               delimiters[startDelim.end + 1].token === endDelim.token + 1 &&
               delimiters[i - 1].marker === startDelim.marker

    ch = String.fromCharCode(startDelim.marker)

    token         = state.tokens[startDelim.token]
    token.type    = isStrong ? 'strong_open' : 'em_open'
    token.tag     = isStrong ? 'strong' : 'em'
    token.nesting = 1
    token.markup  = isStrong ? ch + ch : ch
    token.content = ''

    token         = state.tokens[endDelim.token]
    token.type    = isStrong ? 'strong_close' : 'em_close'
    token.tag     = isStrong ? 'strong' : 'em'
    token.nesting = -1
    token.markup  = isStrong ? ch + ch : ch
    token.content = ''

    if (isStrong) {
      state.tokens.splice(delimiters[startDelim.end + 1].token, 1)
      state.tokens.splice(delimiters[i - 1].token, 1)
      // state.tokens[delimiters[i - 1].token].content = '';
      // state.tokens[delimiters[startDelim.end + 1].token].content = '';
      i--
    }
  }
}

module.exports = md => {
  md.inline.ruler.at('emphasis', (state, silent) => {
    var i,
      scanned,
      token,
      start = state.pos,
      marker = state.src.charCodeAt(start)

    if (silent) 
      return false
    

    if (marker !== 0x5f /* _ */ && marker !== 0x2a /* * */) 
      return false
    

    scanned = state.customScanDelims(state.pos)

    for (i = 0; i < scanned.length; i++) {
      token = state.push('text', '', 0)
      token.content = String.fromCharCode(marker)

      state.delimiters.push({
        marker: marker,
        length: scanned.length,
        jump: i,
        token: state.tokens.length - 1,
        end: -1,
        open: scanned.can_open,
        close: scanned.can_close,
      })
    }

    state.pos += scanned.length

    return true
  })
  md.inline.ruler2.at('emphasis', state => {
    var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length

    postProcess(state, state.delimiters)

    for (curr = 0; curr < max; curr++) 
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) 
        postProcess(state, tokens_meta[curr].delimiters)
      
    
  })
}
