export interface ListItem {
  title: string;
  icon: string;
  color?: string;
}

export interface TabItem {
  key: string;
  name: string;
  component: string;
}

export const orgs: string[] = [
  'citi',
  'citi1',
  'citi2',
  'citi3',
  'citi4',
  'citi5',
  'citi6',
];

export const services: ListItem[] = [
  {
    icon: 'healthicons:ambulatory-clinic',
    name: 'Health',
    color: '#7c51b8',
  },
  {
    icon: 'vaadin:area-select',
    name: 'Job',
    color: '#7c51b8',
  },
  {
    icon: 'cib:apple-pay',
    name: 'Money',
    color: '#7c51b8',
  },
  {
    icon: 'mdi:home',
    name: 'House',
    color: '#7c51b8',
  },
  {
    icon: 'bi:book',
    name: 'Training',
    color: '#7c51b8',
  },

];

export const details: ListItem[] = [
  {
    icon: 'ic:outline-contacts',
    title: '交互专家',
  },
  {
    icon: 'grommet-icons:cluster',
    title: '某某某事业群',
  },
  {
    icon: 'bx:bx-home-circle',
    title: '福建省厦门市',
  },
];

export const achieveList: TabItem[] = [
  {
    key: '1',
    name: 'Comments',
    component: 'Article',
  },
  {
    key: '2',
    name: 'New Comments',
    component: 'UserForm',
  },
];

export const actions: any[] = [
  { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
];

export const articleList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 4; i++) {
    result.push({
      title: 'Citi1',
      description: ['health', 'house', 'money'],
      content: 'A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation',
      time: '2020-11-14 11:20',
    });
  }
  return result;
})();

export const applicationList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Citi',
      icon: 'emojione-monotone:letter-a',
      color: '#1890ff',
      active: '100',
      new: '1,799',
    });
  }
  return result;
})();

export const projectList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Vben Admin',
      content: '基于Vue Next, TypeScript, Ant Design实现的一套完整的企业级后台管理系统。',
    });
  }
  return result;
})();
