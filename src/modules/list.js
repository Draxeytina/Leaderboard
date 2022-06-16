import fetchData from './fetchData.js';

const renderList = () => {
  const playerList = document.querySelector('.list-container');
  playerList.innerHTML = '';
  fetchData().then((result) => {
    const sortScores = result.result.sort((a, b) => b.score - a.score);
    sortScores.forEach((score) => {
      const List = `<li class="list-item">${score.user}: ${score.score}</label></li>`;
      playerList.innerHTML += List;
    });
  });
};

export default renderList;