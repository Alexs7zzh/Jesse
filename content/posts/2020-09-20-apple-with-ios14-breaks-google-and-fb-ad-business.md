---
excerpt: >-
  Privacy means people know what they're signing up for in plain English and
  repeatedly. That's what it means. I'm an optimist. I believe people are smart
  and some people wanna share more data than other people do, ask them, ask them
  every time, make them tell you to stop asking then if they get tired of your
  asking them. Let them know precisely what you're gonna do with their data.
title: iOS 14 重锤广告业：破墙与重建
tags: 科技
image: /assets/2020/facebook-cookies.jpg
---

（本文首发于[极客公园](https://www.geekpark.net/news/266200)，本站收录时进行了修改。）

<br>

iPhone 上一个「弹窗」，击中了谷歌和 FB 的要害。

6 月的 WWDC 上，苹果公布了最新的 iOS 14 系统。在新系统里，苹果将广告追踪功能做成了一个可开关的隐私选项。当任何 App 试图读取用户的 IDFA（广告追踪器）时，都会弹窗询问用户是否同意。

这个小小的功能，引发了线上广告行业的轩然大波。首当其冲，受影响最大的两家公司就是谷歌和 FB。两家的广告系统都需要追踪用户的线上行为，建立用户画像，进行精准的广告推送。如果用户禁止它们访问广告追踪功能，两家公司的广告推送系统将受到极大限制。

现在，iOS 14 正式版已经推送，一切蓄势待发。

<br>

## 广告系统和追踪
过去 20 年，在线广告高速发展，将传统广告远远地甩在身后。

传统电视、纸媒广告的模式就像「大水漫灌」。广告商将广告铺满电视荧幕、报纸版面，当他们想衡量效果时，却只能粗略估算这些广告的覆盖人数。广告主既不知道谁看了这些广告，也不知道他们看完之后的反应如何，更不能洞察广告最终的转化效果。传统广告能做的精细化投放，最多也就是在时尚杂志上宣传化妆品，在体育频道推销剃须刀这种程度。

在线广告有两大革命性优势：精准推送和效果衡量。简单地说，当你访问一个网站，看到一个广告框，这个广告框背后的系统会识别你是谁，然后展示一条为你「量身打造」的广告。当你点击广告，产生一系列后续行为，比如购买商品或下载 App，广告系统也能追踪这一切行为。

在线广告系统之所以能做到这一点，关键在于识别和追踪用户。这项技术并不复杂：所有的智能手机，都会在设备里创建一个随机生成、独一无二的「识别 ID」。这个 ID 可以将用户在不同网站、不同 App 里的行为联系起来，实现「跨网站、跨 App」的行为追踪和广告推送。它的缩写是 IDFA（The Identifier of Advertisers）。

之所以你在 A 电商平台浏览过某款商品后，打开 B 新闻客户端会看到同款产品的广告，正是因为两个 A、B 两个应用读取了你手机的 IDFA。因为 IDFA 的存在，即使你没有注册登录、使用的是不同手机号或邮箱，它们也会知道「这是同一个人」。

理论上每部手机、每台电脑的设备 ID 都是独立的，广告商无法根据设备 ID 追踪你的个人信息。但只要你在手机上登录使用谷歌、FB 旗下的 App，他们就能将你的设备 ID 与你的注册账户联系起来，知道你是谁，实现跨设备、跨平台的广告追踪。

这只是广告系统的最基本逻辑，谷歌和 FB 的触手早已伸进了互联网的每个角落。两家的注册用户几乎囊括海外的整个网民群体，广告插件也覆盖了绝大多数 App 和网站。它们长期收集、分析用户提供的信息，挖掘用户使用产品的行为，可以说对用户「了如指掌」，然后进行大规模的精准广告投放。

谷歌的核心优势在于「兴趣标签」。通过记录用户的搜索记录、YouTube 观看记录，谷歌很容易知道你对什么感兴趣。FB 的杀手锏则在于「社交关系」，用户主动向 FB 提供了自己的年龄、性别、毕业学校、工作单位等资料。通过用户的好友关系，FB 甚至可以轻松推算用户的种族、收入水平、兴趣爱好等信息。

对用户行为的全面追踪和深刻认识，让谷歌和 FB 成为线上广告领域绝对的王者。2019 年，FB 实现广告业务收入 697 亿美元，谷歌的成绩更是高达 1348 亿。

<br>

## 「默认」的力量
这样一套追踪机制，为广告商带来巨大利益的同时，也带来了一系列隐私问题，引发了不小的争议。

争议的焦点在于隐私，解决办法则在于「透明度」。大部分用户在使用互联网产品时，并不清楚这些产品出于什么目的，获取了自己哪些隐私信息，是如何做到的。为保护隐私，用户需要了解科技产品收集信息的整个过程，并有权进行干预、控制。

2016 年，欧盟推出了史上最严格的数据法案 GDPR。法案要求企业向用户提供「足够易懂」的用户协议，规定企业必须向用户提供相关功能，方便用户对自身的隐私信息进行查询、转移、修改和删除。

2018 年，GDPR 正式生效，各家科技巨头的相关产品功能也都陆续上线。用户可以随时登录谷歌、FB 的账号后台，查看自己在这些科技公司眼里「是个什么样的形象」。现在，在谷歌的广告设置页面里，用户可以看到谷歌给自己贴上的全部广告标签，包括性别、年龄、所在地区、手机系统、音乐电影口味、体育爱好……用户可以删除某一个单独的标签，也可以一键关闭整个「个性化广告」功能。

但问题在于，这些功能都是默认开启的，大部分用户仍不会主动去查看、修改自己的广告标签，关闭追踪功能。

所以苹果决定继续推动这件事。

在 iOS 14 上，苹果将每一台 iPhone 的广告追踪功能做成了一个显性的隐私选项。当用户第一次打开 App 时，iOS 会主动询问用户「是否同意 App 对你进行跨网站、App 的追踪？」。显然，大量用户会选择拒绝。

![]({{ "/assets/2020/ios14-tracking-prevent.jpg" | absolute_url }})

根据苹果一贯的态度，App 开发者不能因为用户「拒绝被追踪」，就限制用户正常使用 App。如果 App 因为用户拒绝开启某个权限就不正常运行，面临的后果很可能是直接无法上架 App Store。类似的做法在安卓平台上则屡见不鲜。

而且苹果早就想到了这一层，在 iOS 14 上，用户如果选择「拒绝被追踪」，苹果不会告诉 App「用户拒绝了」，而是会向 App 返回一个随机生成的「假设备 ID」，开发者没有手段对这些 ID 的真伪进行高效分辨。

即便如此，开发者没有理由指责苹果。IDFA 广告追踪功能仍然存在，控制权仍然掌握用户手上，苹果只不过是把「默认开启」变成了「默认询问」。但就是这样一个小小的「默认状态」的改变，或许将改变整个线上广告行业的游戏规则。

如果用户拒绝被追踪，谷歌和 FB 广告系统的核心功能不会受影响，用户登录账号后产生的数据仍会被收集。但两家公司伸向互联网每个角落的触须会被斩断大半，广告投放的效率也会大受影响。

<br>

## 推倒重建
iOS 的微小变化，很快演变成整个行业的地震。

8 月，FB 明确表示，iOS 的这一改变将削弱它投放个性化广告的能力，对未来财务状况带来打击。如果无法进行精准推送，FB 广告的投放效果会大幅下降，直接影响广告的价格。FB 在 iOS 14 测试版上进行了小规模测试，结果是广告收入出现了 50% 的断崖式下跌。

尽管 iPhone 在用户数量上并不占据市场主流，iPhone 用户的消费能力，广告价值却是更高的。2020 年第一季度，iOS 应用市场规模高达 150 亿美元，差不多相当于安卓的两倍。考虑到 FB 和谷歌在 iOS App 里投放的广告有一大部分都是游戏广告，这部分业务对两家公司至关重要。

面临挑战的不止是谷歌和 FB。由于整个市场对 IDFA 的依赖程度太高，影响很快会传导至整个行业，包括广告主，以及靠广告模式生存的 App 开发者。摩根士丹利表示，整个广告行业的收入都会受到损害。

连暴雪都受到了影响。8 月的财报电话会议上，主营业务并非手机游戏的动视暴雪表示，正在权衡各种解决方案，以应对 iOS 的变化。方案包括「要求用户提供邮件地址（进行追踪）」或「向用户推送提示，请求启动追踪功能」。

9 月初，迫于各方面的压力，苹果决定推迟该功能的上线时间到 2021 年初。苹果表示会给开发者更多时间，对 App 进行调整，以适应这一新变化。

苹果想扮演的不只是「破坏者」的角色。在向 IDFA 模式重拳出击的同时，它也设计了一套新的「重建方案」。

![]({{ "/assets/2020/skad-frame.jpg" | absolute_url }})

两年前，苹果就自己设计了一套针对 iOS 的广告追踪框架，SKAdNetwork。它与 IDFA 一样，可以追踪广告投放的效果。不同的是，SKAd 不会追踪特定的用户或设备，而只会追踪「行为」。

具体来说，当用户点击一条广告，SKAd 会为这次点击行为分配一个 ID，然后展示被推广的 App 页面，如果用户下载、安装、运行了 App，SKAd 就会记录下后续的操作，并将结果发给广告商。广告商仍然能够评估投放效果，只是不知道谁被转化了。

相比 IDFA，SKAd 显然提高了精准投放的难度，但广告商别无选择。8 月末，谷歌已经在最新版的广告 SDK 里加入了对 SKAdNetwork 的支持，FB 也宣布将在未来的 SDK 中加入相关支持。

<br>

## 未来会如何？
苹果一直将「隐私」看作重要的产品战略，不断推出比业界平均水平更严格的隐私保护功能。

2017 年，苹果在 Safari 浏览器上推出了「智能防追踪」功能，会默认定期清除浏览器 cookies 缓存，阻断了广告平台对用户长期的跨网页追踪。之后，每一年系统更新，苹果都会在之前的基础上，进一步强化这个功能。

类似的举措还有很多很多，比如苹果很早就禁止 App 读取手机用于联网的 MAC 地址，防止用户的身份被追踪。iOS 14 里，苹果将这个功能进一步强化，会针对每一个不同的 Wi-Fi 网络生成一个独一无二的 MAC 地址，防止公共 Wi-Fi 通过这个功能对用户位置进行追踪。

库克在各种场合反复表示，「我们不会把顾客当成产品（卖掉）」，强调苹果的商业模式建立在「保护用户隐私」的基础上。苹果制作了一系列强调隐私的产品广告，喊出了「隐私？那就选 iPhone。」（Privacy? That's iPhone）的口号。

想要从根本上解决隐私问题，单靠苹果一家公司显然是不够的。今天，整个科技行业都面临着空前质疑，用户对隐私问题的担忧，早已不只针对某一个产品、某一家公司。这种担忧正演变为对整个科技行业，对一切技术的不信任。如果科技公司不做出改变，任由技术悲观情绪蔓延，只会造成「双输」的局面。

十年前的 D8 大会上，Walt Mossenberg 谈到了科技产品带来的隐私担忧。当时乔布斯旗帜鲜明地与「整个硅谷」划清界限。在解释苹果处理隐私问题的方式时，他说：

> 硅谷对待隐私问题的态度并非铁板一块。相比硅谷的同仁，我们（苹果）在看待隐私问题时一直有着不同的观点。我们用极其严格的态度处理隐私问题。举个例子，我们很担心 iPhone 的定位功能，担心比如某个 14 岁小孩会因为我们手机的定位功能被跟踪。所以当任何一个 app 想要获取手机的位置时，我们的做法不是让 app 开发者自己设计一个弹窗去询问用户，因为他们可能不会遵守。我们的做法是让他们呼叫 iPhone 的「位置服务」，然后我们（iOS 系统）弹出一个窗口询问用户「这个 app 想要获取你的位置数据，可以吗？」，每一次获取都这样弹出。我们做了很多类似的事情，保证用户完全明白这些 app 在干什么。
> 
>
>
> 「隐私」意味着用户签字同意的时候知道他们在签什么。我们相信用户是聪明的，有自己的判断能力。有些人或许愿意分享更多数据，但你必须先获得他们的允许，每一次都去询问，直到他们主动要求你不要再问了。让他们明确了解，你会拿他们的数据去干什么。
> 
>
>
> Silicon Valley is not monolithic, we've always had a very different view of privacy than some of our colleagues in the valley. We take privacy EXTREMELY seriously. As an example, we worry a lot about location in phones, and we worry that some 14-year old is gonna get stalked and something terrible is gonna happen because our phone. So as an example before any app can get location data, we don't make it a rule that they have to put up a panel and ask because they might not follow that rule. They call out location services and we put up the panel saying "this app wants to use your location data, is that okay with you?" every time they wanna use it. We do a lot of things like that, to ensure that people understand what these apps are doing.
> 
>
>
> Privacy means people know what they're signing up for in plain English and repeatedly. That's what it means. I'm an optimist. I believe people are smart and some people wanna share more data than other people do, ask them, ask them every time, make them tell you to stop asking then if they get tired of your asking them. Let them know precisely what you're gonna do with their data. That's what we think.
