'use strict'
const menu = document.getElementsByClassName('fa-bars')[0]

menu.addEventListener('click', () => {
    document.querySelector('#list').classList.remove('control__menu');
    if(document.querySelector('#list').classList.contains('show')) {
        document.querySelector('#list').classList.add('hide');
        document.querySelector('#list').classList.remove('show');
        return;
    }
    document.querySelector('#list').classList.toggle('show');
    document.querySelector('#list').classList.remove('hide');
})

window.addEventListener("resize", () => {
    if(window.innerWidth > 838) {
        document.querySelector('#list').classList.add('control__menu');
        document.querySelector('#list').classList.remove('hide');
        document.querySelector('#list').classList.remove('show');
    }
});

const hearts = document.getElementsByClassName('fa-heart');

for(let i=0; i<hearts.length; i++) {
    console.log(hearts[i]);
    hearts[i].addEventListener('click', () => {
        hearts[i].classList.toggle("red");
    })
}

document.getElementById('date').textContent = new Date().getFullYear();