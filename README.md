# ZJUTLUG-WEBSITE
这是浙江工业大学的LUG社团网站的仓库

这个网站基于 [Hexo](https://hexo.io/zh-cn/) 框架和 [Solitude](https://solitude.js.org/cn/) 主题搭建，相应的改动`push`到这个仓库以后由`Cloudflare Workers`自动监测并运行部署

## 主要文件结构
ZJUTLUG-website/ <br>
├── README.md <br>
├── themes/       #主题文件夹 <br>
├── source/       #静态内容文件夹<br>
│ ├── _data/      #组件<br>
│ ├── _post/      #文章文件夹 <br>
│ ├── img/        #图片文件夹 <br>
│ │   ├── post/   #文章图片文件夹 <br>
│ │   │    └──  *****/      #同名文章文件夹 <br>
│ │   ├── logo/   #网站主页logo滚动图片 <br>
│ │   ├── default.webp      #效果图 <br>
│ │   ├── defaultcover.webp #缺省文章封面 <br>
│ │   ├── logo.ico          #网站ico <br>
│ │   └── logo.webp         #ZJUTLUG社团logo <br>
│ ├── about/     #关于页面 <br>
│ ├── schedule/  #日历组件 <br>
│ └── calendar/  #活动界面 <br>
├── _config.yml  #Hexo主配置文件 <br>
└── _config.landscape.yml #solitude主题配置文件 <br>

## 初始化项目
1. 使用`git clone`将项目克隆到本地
2. 进入项目文件夹，按照[hexo安装指南](https://hexo.io/zh-cn/docs/#%E5%AE%89%E8%A3%85)配置`node.js`和`hexo`
3. 在项目文件夹下安装必要的包
```shell
npm i
```
4. 按照[Solitude指南](https://solitude.js.org/cn/getting-started/installation)加载主题，此处以Git作为示范，确保你在项目文件夹下后将主题`clone`到本地
```shell
git submodule add https://github.com/everfu/hexo-theme-solitude themes/solitude
```
## 编辑文章
### 文章命名规范

我们推荐使用下划线连接的命名方式，例如`my_first_post.md`

对于图片文件，请在`/source/img/post/`下创建与文章**同名**的文件夹来存放相关图片，例如`my_first_post/`，以便于管理和查找

### 创建新文章
使用Hexo命令行工具创建新文章
```shell
hexo new post
```
这将在`/source/_posts/`目录下创建一个新的Markdown文件，文件名格式为`post.md`，请根据命名规范进行修改

### 文章格式
对于文章抬头部分，请参考以下示例
```yaml
---
title: 活动预告 | 浙江工业大学 ZJUT LUG “河畔义修”活动公告 
date: 2025-12-04 14:02:53
tags: [活动计划,公告]
cover: /img/defaultcover.webp
---
```
- `title`: 文章标题
- `date`: 文章发布日期和时间，格式为`YYYY-MM-DD HH:MM:SS`，这会在执行post时自动创建
- `tags`: 文章标签，使用数组格式，可以添加多个标签
- `cover`: 文章封面图片路径，请使用`/img/defaultcover.webp`作为缺省封面

### 特殊的文章类型
对于活动预告类文章，
- 请确保在`title`中包含`活动预告 | `前缀
- 添加`活动计划`标签以便于分类
- 在文件名前添加`announcement_`前缀，例如`announcement_meeting_2024.md`

## 日历组件介绍
日历组件位于`/source/calendar/`目录下，使用`JavaScript`编写，主要用于展示社团的活动安排

位于首页的日历组件会自动读取`/source/calendar/`目录下的`events.json`文件，该文件包含了所有活动的详细信息，请按照以下格式添加新的活动
```json
  {
    "title": "ZJUTLUG 第一次安装派对",
    "start": "2025-11-29",
    "url": "/2025/11/29/ZJUTLUG_first_installation_party/"
  },
```
- `title`: 活动标题
- `start`: 活动开始日期，格式为`YYYY-MM-DD`
- `url`: 活动详情页面的链接

