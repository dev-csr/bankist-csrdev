'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function(e){
  const s1coords = section.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('current scroll (X/Y) ', window.pageXOffset,window.pageYOffset);
  console.log('height/width viewport ', document.documentElement.clientHeight, document.documentElement.clientWidth);
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   right:  s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',  
  // });
  section1.scrollIntoView({behavior: 'smooth'});
});

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();

  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior : 'smooth' });
  }
});

const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(1)';
// });


tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard Clause
  if(!clicked) return;
  
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');
  console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

const initialCoords = section1.getBoundingClientRect();
windows.addEventListener('scroll', function(){
  if(window.scrollY > initialCoords.top)nav.classList.add('sticky');
  else nav.classList.remove('sticky');
})

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


// const header = document.querySelector('.header');
// const allsections = document.querySelector('.section');
// console.log(allsections);

// document.getElementById('section---1');
// const allButtons = document.getElementsByTagName('button');

// console.log(document.getElementsByClassName('btn'));
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'We used cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// // header.prepend(message);
// header.append(message);
// //header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);
// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//   message.remove();
//   message.parentElement.removeChild(message);
// });

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);

// console.log(getComputedStyle(message).height);
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //STANDARD-ATTRINBUTES
// const logo = document.querySelector('.nav_logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// logo.alt = 'Beautiful minimilist logo';

//Non-standard Attributes
// console.log(logo.designer);
// console.log(logo.getAttribute);
// logo.setAttribute('company','Bankist');
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

//Data Attributes
// console.log(logo.dataset.versionNumber);

// logo.classList.add('c','j');
// logo.classList.remove('c','j');
// logo.classList.toggle('c');
// logo.classList.constains('c');

//Don't use
// logo.className = 'Krishna';


// const h1 = document.querySelector('h1');
// const alertH1 = function(e){
//   alert('addEventListner: Great! You are reading the heading.');
// };
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(()=>h1.removeEventListener('mouseenter', alertH1), 5000);
// h1.onmouseenter = function(e){
//   alert('I am Srikanth');
// }
// const randomInt = (min,max) => Math.floor(Math.random()*(max-min+1)+min);
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });



