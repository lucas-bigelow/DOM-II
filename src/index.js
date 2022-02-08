import './less/index.less'

// Your code goes here!


// ten different event listeners below here!

// the stuff in the document I'll be changing

const doc = document.querySelector('body');

const mainHeader = document.querySelector('.main-navigation');

const intro = document.querySelector('.intro');

const introImg = document.querySelector('.intro img');

const sneakyLink = document.querySelector('.nav a');

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
})

// number five -- 'sneaky link'

sneakyLink.addEventListener('click', e => {
  e.preventDefault();
  introImg.src = 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?fit=crop&h=1000&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Fbg%3D80000000%26txt%3DFree%2BStock%2BPhotos%26txtalign%3Dcenter%26txtclr%3Dfff%26txtfont%3DAvenir-Heavy%26txtpad%3D20%26txtsize%3D120%26w%3D1300&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10&txtsize=60&w=1500';
})

// number six -- 'drag'

sneakyLink.addEventListener('drag', evt => {
  evt.preventDefault();
  sneakyLink.classList.toggle('black');
})

// number seven -- 'wheel'

doc.addEventListener('wheel', evt => {
  evt.preventDefault();
  doc.classList.toggle('make-it-small');
})

// number eight -- 'dragend'

introImg.addEventListener('dragend', function(event) {
  event.preventDefault();
  doc.classList.toggle('make-it-blue');
  console.log('ahahahaha')
})

// number nine -- 'mousedown'

introImg.addEventListener('mousedown', evt => {
  evt.preventDefault();
  doc.classList.toggle('make-it-red');
})

// number ten -- 'mouseup'

introImg.addEventListener('mouseup', e => {
  e.preventDefault();
  doc.classList.toggle('make-it-red');
})