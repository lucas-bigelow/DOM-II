import './less/index.less'

// Your code goes here!


// ten different event listeners below here!

// the stuff in the document I'll be changing

const doc = document.querySelector('body');

const mainHeader = document.querySelector('.main-navigation');

const intro = document.querySelector('.intro');

const introImg = document.querySelector('.intro img');

// number one -- 'click'

mainHeader.addEventListener('click', function(event) {
  event.preventDefault();
  mainHeader.classList.toggle('black');
})

// number two -- 'mouseover'

intro.addEventListener('mouseover', evt => {
  evt.preventDefault();
  intro.classList.toggle('change-font');
})

// number three -- 'dblclick'

introImg.addEventListener('dblclick', function(e) {
  e.preventDefault();
  introImg.classList.toggle('resize');
})

// number four -- 'keydown'

doc.addEventListener('keydown', function(event) {
  event.preventDefault();
  doc.classList.toggle('blinding');
  console.log('ahahaha')
})