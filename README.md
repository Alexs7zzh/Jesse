## Todo

Performance
- [x] 压缩 svg 图标并 inline 到 html
- [x] Plausible 记录实际加载图片尺寸

Function
- [x] 标签页 Javascript
- [x] table of contents

Immigration
- [x] 移除所有 absolute_url
- [x] 移除所有 post_url
- [x] 移除所有 excerpt_img
- [x] 更改 assets url
- [x] 部分文章 Markdown 语法错误，用 linter 检查
- [x] 检查所有图片
- [x] 检查所有链接

Finishing up
- [ ] 添加 analytics
- [ ] 迁移域名时更改 picture plugin, metadata 中的网址

## 需要确认

1. 「钱的焦虑、责任和安全感」支付宝图片高度？（原博客：图片最大高度 37em）或许可以手动给图片加余白
2. 第x页的网页标题，原本：「Page 2 of 51 for 大破进击 - Page 2 of 51 | 大破进击」
3. Maybe: 减小文章标题的行距（主要是手机上双行标题的情况）

![](https://share.getcloudapp.com/L1udplOp "Normal line height (1.6)") ![](https://share.getcloudapp.com/kpuK5rN6 "1.4 line height")

## Markdown

文章 meta 信息
```
---
excerpt: |-
  按照计划，拜登的就任典礼将于 1 月 20 日下周三举办。这位新总统，将面对一个思想、观点已经彻底走向极端，满目疮痍的美国。他的首要任务，就是弥合双方的分歧，建立起沟通的桥梁。

  而这个问题，从来都不只是美国人的问题。
title: ⭐️ 放逐特朗普
tags: 科技 新闻报道 ⭐️
image: /assets/2021/trump-capitol-rally.jpg
---
```
（`|-`是 frontmatter 中表示多行的符号，之后可以正常写 Markdown。需要缩进。分段落不再需要中间空三行。）

图片
```
![](/assets/2020/iphone-12-mini-1.jpg)
```
（避免在文件夹名或图片名中出现空格，比如 `/assets/2018/Ready Player One/1.jpg` 被改为了 `/assets/2018/Ready-Player-One/1.jpg`）

博客内链接
```
// https://jesse-rebuild.vercel.app/2021/three-stories-about-zhihu/
[跟知乎有关的三个故事](/2021/three-stories-about-zhihu/)
```

Ulysses Markdown 并不是 Markdown 标准语法。
1. 每一个元素之间必须空行。
```
// Wrong
<br>
## Title
Paragraph

// Correct
<br>

## Title

Paragraph
```

2. 一篇文章中只能有一个 h1 元素（文章标题），文稿内要从 h2 开始。

## Broken Links

Getting links from: https://jesse-rebuild.vercel.app/2015/jesse-chan-talk-about-recent-zhihui/  
├─BROKEN─ http://www.zhihu.com/question/36519478 (HTTP_404)

Getting links from: https://jesse-rebuild.vercel.app/page/28/  
├─BROKEN─ https://www.bilibili.com/video/av9780659/ (HTTP_403)

Getting links from: https://jesse-rebuild.vercel.app/2015/2015-annual-tops/  
├─BROKEN─ https://zhihu.com/question/36096053/answer/66130887 (HTTP_410)

Getting links from: https://jesse-rebuild.vercel.app/2016/weisijia-ganhuo-zhihu-with-kpi/  
├─BROKEN─ https://zhuanlan.zhihu.com/p/21255793 (HTTP_404)  
├─BROKEN─ https://zhuanlan.zhihu.com/p/21286969 (HTTP_404)  
├─BROKEN─ https://zhuanlan.zhihu.com/p/21291225 (HTTP_404)

Getting links from: https://jesse-rebuild.vercel.app/2016/cold-warmth-of-vending-machine/  
├─BROKEN─ https://www.bilibili.com/video/av4702272/ (HTTP_403)  

Getting links from: https://jesse-rebuild.vercel.app/2016/talk-to-siri-with-voice-of-c-3po/  
├─BROKEN─ https://www.youtube.com/watch%3Fv%3DnWiIWyCeZso

Getting links from: https://jesse-rebuild.vercel.app/2016/kimochi-of-touching-virtual-reality/  
├─BROKEN─ http://telegra.ph/Lawrence-Li-%E6%89%80%E4%BD%9C%E7%9A%84%E4%B8%8E%E8%99%9A%E6%8B%9F%E7%8E%B0%E5%AE%9E%E7%9B%B8%E5%85%B3%E7%9A%84%E8%AE%BA%E8%BF%B0-12-10 (HTTP_501)

Getting links from: https://jesse-rebuild.vercel.app/2016/2016-annual-tops/  
├─BROKEN─ https://zhuanlan.zhihu.com/p/24459846 (HTTP_404)

Getting links from: https://jesse-rebuild.vercel.app/2016/year-end-salute/  
├─BROKEN─ https://www.bilibili.com/video/av2395209/ (HTTP_403)

Getting links from: https://jesse-rebuild.vercel.app/2017/virtual-idol-struggle-prosper/  
├─BROKEN─ https://www.youtube.com/watch%3Fv%3DMGt25mv4-2Q (HTTP_429)

Getting links from: https://jesse-rebuild.vercel.app/2017/musical-friday-nintendo-music/  
├─BROKEN─ https://www.bilibili.com/video/av9780659/ (HTTP_403)

Getting links from: https://jesse-rebuild.vercel.app/2017/beyond-the-space/  
├─BROKEN─ http://www.g-cores.com/articles/25846 (ERRNO_ENOTFOUND)

Getting links from: https://jesse-rebuild.vercel.app/2018/liqi-review/  
├─BROKEN─ https://www.xbox.com/en-US/xbox-one/accessories/controllers/elite-wireless-controller (HTTP_404)  
├─BROKEN─ https://ulyssesapp.com/ (HTTP_504)  
├─BROKEN─ http://liqi.io/community/ (HTTP_404)

Getting links from: https://jesse-rebuild.vercel.app/2018/behind-the-mac-in-the-front-of-iphone/  
├─BROKEN─ https://www.bilibili.com/video/av9550266/?p=6 (HTTP_403)

Getting links from: https://jesse-rebuild.vercel.app/2018/apple-q3-fy18-report/  
├─BROKEN─ https://techcrunch.cn/2018/08/01/apple-q3-earnings-analysis/ (BLC_UNKNOWN)

Getting links from: https://jesse-rebuild.vercel.app/2018/gap-001/  
├─BROKEN─ https://im.smartisan.com/ (ERRNO_ENOTFOUND)

Getting links from: https://jesse-rebuild.vercel.app/2018/apple-18-fall-event/  
├─BROKEN─ https://techcrunch.cn/2018/09/13/apple-18-fall-event/ (BLC_UNKNOWN)

Getting links from: https://jesse-rebuild.vercel.app/2018/gap-005/  
├─BROKEN─ https://itunes.apple.com/us/tv-season/season-4-episode-2-the-best-burger-in-new-york/id1307176316?i=1311975938%EF%BF%BD (HTTP_413)  
├─BROKEN─ https://tan.today/about/ (HTTP_undefined)  
├─BROKEN─ https://tan.today/ (ERRNO_ENOTFOUND)  
├─BROKEN─ https://tan.today/original-desire-in-modern-age/ (ERRNO_ENOTFOUND)

Getting links from: https://jesse-rebuild.vercel.app/2018/life-in-a-third-tier-city/  
├─BROKEN─ https://jarodise.com/about/ (HTTP_404)

Getting links from: https://jesse-rebuild.vercel.app/2018/gap-007/  
├─BROKEN─ https://tan.today/about/ (HTTP_undefined)

Getting links from: https://jesse-rebuild.vercel.app/2018/gap-006/  
├─BROKEN─ https://tan.today/about/ (HTTP_undefined)

Getting links from: https://jesse-rebuild.vercel.app/2018/gap-008/  
├─BROKEN─ https://tan.today/about/ (ERRNO_ENOTFOUND)

Getting links from: https://jesse-rebuild.vercel.app/2018/apple-18-oct-event/  
├─BROKEN─ https://techcrunch.cn/2018/10/31/apple-2018-winter-event-creativity-and-productivity/ (BLC_UNKNOWN)

Getting links from: https://jesse-rebuild.vercel.app/2018/the-recipe-for-digital-music/  
├─BROKEN─ https://tan.today/the-ultimate-answer-to-digital-music/ (ERRNO_ENOTFOUND)

Getting links from: https://jesse-rebuild.vercel.app/2018/ipad-pro-2018-review/  
├─BROKEN─ https://techcrunch.cn/2018/11/24/ipad-pro-2018-professional-amateur (BLC_UNKNOWN)

Getting links from: https://jesse-rebuild.vercel.app/2019/honor-v20-review/  
├─BROKEN─ https://www.bilibili.com/video/av39159206 (HTTP_403)

Getting links from: https://jesse-rebuild.vercel.app/2019/xiaomi-has-no-personality/  
├─BROKEN─ https://techcrunch.cn/2019/02/23/still-xiaomi/ (BLC_UNKNOWN)

Getting links from: https://jesse-rebuild.vercel.app/2019/apple-spring-event/  
├─BROKEN─ https://techcrunch.cn/2019/03/26/apple-spring-event/ (BLC_UNKNOWN)

Getting links from: https://jesse-rebuild.vercel.app/2019/AirPods-2019-review/  
├─BROKEN─ https://techcrunch.cn/2019/04/10/airpods-2019-review/ (BLC_UNKNOWN)

Getting links from: https://jesse-rebuild.vercel.app/aboutme/  
├─BROKEN─ http://www.bilibili.com/video/av9780659 (HTTP_403)
