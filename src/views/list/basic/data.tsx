export const cardList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: 'Vben Homeless',
      description: 'A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation',
      datetime: '2020-11-26 17:39',
      extra: 'create plan',
      icon: '/src/assets/images/header.jpg',
      color: '#1890ff',
      author: 'Vben'
    });
  }
  return result;
})();
