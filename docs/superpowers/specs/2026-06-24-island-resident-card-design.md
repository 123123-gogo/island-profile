# Island Resident Card — Design Spec

**Date:** 2026-06-24 | **Status:** Approved
**Stack:** Vite + React + TypeScript + animal-island-ui

## Core Concept

全屏模拟 Nintendo Switch 动物森友会游戏界面。访客进入页面就像打开了一台 NookPhone，看到岛民身份卡、技能、项目展示。游戏按键手感、温暖大地色系、自定义光标、SVG blob 弹窗。

## Pages (Single Page)

### Section 1: NookPhone 外壳
- `Phone` 组件包裹整体，模拟游戏里 NookPhone 外观
- 顶部状态栏：`Time` 实时时钟 + 信号图标
- 自定义 `Cursor` 替换浏览器光标

### Section 2: 岛民身份卡
- `Wallet` 组件展示身份卡片
- `Title` 展示名字（飘带 swallowtail 切角）
- `Typewriter` 打字机效果自我介绍

### Section 3: 能力面板
- `Card` (NookPhone 配色 + pattern 壁纸) 展示技能
- `Title` 分区标题

### Section 4: 项目展示
- `Card` 网格，dashed 边框变体
- `Modal` (SVG blob 形状) 点击展开项目详情
- `Button` 游戏按键风格的 CTA

### Section 5: 联系与社交
- `Input` + `Button` 留言
- `Icon` 社交链接
- `Footer` 游戏风格页脚

## Data
- `src/data/resident.ts` — 单一数据文件，改一个文件换人
- 字段：name, island, avatar, bio, skills, projects, socials

## animal-island-ui Components Used
Phone, Time, Cursor, Wallet, Title, Typewriter, Card, Modal, Button, Input, Icon, Divider, Footer, Tooltip

## Visual
- 温暖大地色系（组件库默认 token）
- 大圆角 pill 形
- 游戏按键 3D 感
- 柔和 CSS transition
- pattern 波点壁纸 Card 背景
