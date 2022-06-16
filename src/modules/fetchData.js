import URL from './gameURL.js';

const fetchData = async () => {
  const response = await fetch(URL);
  const scores = await response.json();
  return scores;
};

export default fetchData;