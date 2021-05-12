'use strict';
//creating variables for elements we bring to the dom from HTML
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//functions to reuse code in our project
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//adding a loop through the buttons array and then attaching an event listener, and then passing our functions into the handler.

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//key press event is a global event, so for these we select the whole document.
//the event arguement passed into the function will access the event object
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
