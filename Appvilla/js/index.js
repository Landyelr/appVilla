const navbar = document.getElementById("header");
const logo = document.querySelector(".logo");
const goTopBtn = document.getElementById("go-top");

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY > 0) {
        navbar.classList.add('scrolled');
        logo.setAttribute('src','./media/svg/logo.svg');
    } else {
        navbar.classList.remove('scrolled');
        logo.setAttribute('src','./media/svg/white-logo.svg');
    }

    if(window.scrollY > 50) {
        goTopBtn.classList.replace('no-scrolled-btn','scrolled-btn');
    } else {
        goTopBtn.classList.replace('scrolled-btn','no-scrolled-btn');
    }
});


const sliderOne = document.querySelector('.slider-1');
const sliderTwo = document.querySelector('.slider-2');
const sliderThree = document.querySelector('.slider-3');

const buttonOne = document.querySelector('.btn-slide-1');
const buttonTwo = document.querySelector('.btn-slide-2');
const buttonThree = document.querySelector('.btn-slide-3');

buttonOne.addEventListener('click', () =>{
    sliderOne.classList.add('active');
    sliderTwo.classList.remove('active');
    sliderThree.classList.remove('active');
    buttonOne.classList.add('active');
    buttonTwo.classList.remove('active');
    buttonThree.classList.remove('active');
});

buttonTwo.addEventListener('click', () =>{
    sliderOne.classList.remove('active');
    sliderTwo.classList.add('active');
    sliderThree.classList.remove('active');
    buttonOne.classList.remove('active');
    buttonTwo.classList.add('active');
    buttonThree.classList.remove('active');
});

buttonThree.addEventListener('click', () =>{
    sliderOne.classList.remove('active');
    sliderTwo.classList.remove('active');
    sliderThree.classList.add('active');
    buttonOne.classList.remove('active');
    buttonTwo.classList.remove('active');
    buttonThree.classList.add('active');
});