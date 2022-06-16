import URL from './gameURL.js';

const playerName = document.getElementById('name');
const playerScore = document.getElementById('score');

const postData = async () => {
  const response = await fetch(URL,
    {
      method: 'POST',
      body: JSON.stringify({
        user: playerName.value,
        score: playerScore.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  const dataSent = await response.json();
  return dataSent;
};

export default postData;