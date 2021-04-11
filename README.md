## Markdown

### 文章 meta 信息

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

### 图片

```
![](/assets/2020/iphone-12-mini-1.jpg)
```
（避免在文件夹名或图片名中出现空格，比如 `/assets/2018/Ready Player One/1.jpg` 被改为了 `/assets/2018/Ready-Player-One/1.jpg`）

### 博客内链接

```
// https://jesor.me/2021/three-stories-about-zhihu/
[跟知乎有关的三个故事](/2021/three-stories-about-zhihu/)
```

### 自动保留换行

原本只由一个换行相隔的两行文字在 markdown 中会自动被归为同一个段落中，因此想要实现换行必须添加`<br>`这个 HTML 换行元素。现在换行会被保留，不再需要`<br>`。

```
// before
Line A<br>
Line B

// now
Line A
Line B
```

当想要额外空白的情况，还是需要`<br>`。
```
Paragraph A

<br>

Paragraph B
```

### Ulysses Markdown 并不是 Markdown 标准语法。

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
