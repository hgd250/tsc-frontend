interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
  },
  {
    title: '仪表盘',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
  },
  {
    title: '组件',
    icon: 'ion:layers-outline',
    color: '#e18525',
  },
  {
    title: '系统管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
  },
  {
    title: '权限管理',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
  },
  {
    title: '图表',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
   {
      avatar: 'dynamic-avatar-1|svg',
      name: '',
      date: 'From PC on 20161024',
      desc: `I'm very happy to join the spring board community. Thanks everyone who ever game me the help!`,
    },
    {
      avatar: 'dynamic-avatar-2|svg',
      name: '',
      date: 'From cellphone on 20161024',
      desc:  `&nbsp&nbsp&nbsp&nbspHi John, It's our honor to help you and all other people like you who need help.`,
    },
  {
    avatar: 'dynamic-avatar-3|svg',
    name: '',
    date: '1 day ago',
    desc: `Never give up on hope `,
  },
  {
    avatar: 'dynamic-avatar-4|svg',
    name: '',
    date: '2 days ago',
    desc: `You are not alone. `,
  },
  {
    avatar: 'dynamic-avatar-5|svg',
    name: '',
    date: '3 days',
    desc: `Everything is going to be okay.`,
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '',
    date: '1 week ago',
    desc: `Stay positive. It changes everything.`,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '',
    date: '1 week ago',
    desc: `The hardship you’re experiencing now does not define you.`,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '',
    date: '2021-04-01 20:00',
    desc: `Each challenge you face is just a stepping stone toward your dreams.`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: 'Github',
    icon: 'carbon:logo-github',
    color: '',
    desc: '不要等待机会，而要创造机会。',
    group: '开源组',
    date: '2021-04-01',
  },
  {
    title: 'Vue',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: '现在的你决定将来的你。',
    group: '算法组',
    date: '2021-04-01',
  },
  {
    title: 'Html5',
    icon: 'ion:logo-html5',
    color: '#e18525',
    desc: '没有什么才能比努力更重要。',
    group: '上班摸鱼',
    date: '2021-04-01',
  },
  {
    title: 'Angular',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: '热情和欲望可以突破一切难关。',
    group: 'UI',
    date: '2021-04-01',
  },
  {
    title: 'React',
    icon: 'bx:bxl-react',
    color: '#00d8ff',
    desc: '健康的身体是实现目标的基石。',
    group: '技术牛',
    date: '2021-04-01',
  },
  {
    title: 'Js',
    icon: 'ion:logo-javascript',
    color: '#EBD94E',
    desc: '路是走出来的，而不是空想出来的。',
    group: '架构组',
    date: '2021-04-01',
  },
];
