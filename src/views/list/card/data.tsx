export const cardList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 12; i++) {
    result.push({
      name: 'Vben Admin',
      img: '/src/assets/images/header.jpg',
      desc: 'A complete enterprise level backend management system based on Vue Next, TypeScript, Ant Design Vue implementation'
    });
  }
  return result;
})();
