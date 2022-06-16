import './style.css';

import postData from './modules/postData.js';
import renderList from './modules/list.js';

const refreshBtn = document.querySelector('.refresh');
const submitBtn = document.querySelector('.submit');

window.addEventListener('DOMContentLoaded', renderList);
refreshBtn.addEventListener('click', renderList);
submitBtn.addEventListener('click', postData);
