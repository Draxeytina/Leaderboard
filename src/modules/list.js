const scores = [
  {
    name: 'Malven',
    score: '20',
  },
  {
    name: 'Bethany',
    score: '1040',
  },
];

const renderList = () => {
  scores.forEach((score) => {
    const List = `<li class="list-item">${score.name}: ${score.score}</label></li>`;
    document.querySelector('.list-container').innerHTML += List;
  });
};

export default renderList;