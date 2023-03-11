/* eslint-disable no-restricted-syntax */
const div = document.querySelectorAll('div');
for (const element of div) {
  element.addEventListener('click', function click() {
    this.firstElementChild.click();
  });
}
const idcard = document.querySelector('#idcard');
const id = document.querySelector('#id');
setInterval(() => {
  if (idcard.value) {
    id.firstElementChild.classList.remove('fa-camera');
    id.firstElementChild.classList.add('fa-check');
  } else {
    id.firstElementChild.classList.add('fa-camera');
    id.firstElementChild.classList.remove('fa-check');
  }
}, 3000);


const input = document.querySelectorAll('input')
input.forEach((element)=> {
  if(element.name === '' || element.name === null){
    console.log(element)
  }
})