// import _ from 'lodash';
import './style.css';
const API = [
    {
        id : '1',
        name: 'movie',
        description: '3 hours long',
        img: 'img',
        length: '100',
        fuel: 'no fuel'
}
]
// pop-up section
const commentBtn = document.querySelectorAll('.commentBtn');
const popMenu = document.querySelector('.seePopup');

commentBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    popMenu.classList.add('act');
    popMenu.innerHTML = `
    <section id="commentPopup">
  <div class="imgContainer">
    <img class= "commentImg" src="${API[index].img}" alt="Comment Image"><span class="close-btn">&#x2715;</span>
  </div>
  <h3 id="commentTitle">${API[index].name}</h3>
<div id="commentDetails">
  <p>Fuel: ${API[index].fuel}</p>
  <p>Length: ${API[index].length}</p>
  <p>Weight: ${API[index].length}</p>
  <p>Power: 100,000,000</p>
</div>
</section>`;

    const popClose = document.querySelector('.close-btn');
    popClose.addEventListener('click', () => {
      popMenu.classList.remove('act');
      document.body.classList.remove('no-scroll');
    });
  });
});