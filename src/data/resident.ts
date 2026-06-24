export interface Project {
  title: string
  desc: string
  link: string
  image: string
}

export interface Social {
  icon: string
  label: string
  url: string
}

export interface Resident {
  name: string
  island: string
  avatar: string
  bio: string
  skills: string[]
  projects: Project[]
  socials: Social[]
}

export const resident: Resident = {
  name: 'Showmaker',
  island: '虹光岛',
  avatar: 'https://picsum.photos/seed/resident-avatar/200/200',
  bio: '创意开发者，喜欢用代码构建有趣的东西。探索生成艺术、交互设计与数字品牌的交叉领域。',
  skills: [
    'React', 'TypeScript', 'Tailwind CSS', 'WebGL',
    'Node.js', 'Figma', 'Motion Design', 'Three.js',
  ],
  projects: [
    {
      title: '虹光创意实验室',
      desc: 'WebGL 驱动的暗黑风格创意工作室品牌站，含全彩渐变背景与玻璃态 UI。',
      link: 'https://123123-gogo.github.io/iridescent-lab/',
      image: 'https://picsum.photos/seed/proj-iridescent/400/240',
    },
    {
      title: '小红书文案 AI',
      desc: 'DeepSeek 驱动的 AI 文案生成工具，6种爆款风格。',
      link: '#',
      image: 'https://picsum.photos/seed/proj-xhs/400/240',
    },
    {
      title: '静读',
      desc: '深度阅读内容站点，暗色主题配 Iridescence WebGL 背景。',
      link: '#',
      image: 'https://picsum.photos/seed/proj-jingdu/400/240',
    },
  ],
  socials: [
    { icon: 'github', label: 'GitHub', url: 'https://github.com/123123-gogo' },
    { icon: 'mail', label: 'Email', url: 'mailto:hello@example.com' },
    { icon: 'link', label: 'Website', url: '#' },
  ],
}
