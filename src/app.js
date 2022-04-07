import './styles/style.scss';

const slider = document.querySelector('.main__img');
const tabs = document.getElementsByClassName('tabs');

let currentSlideNumber = 0;
tabs[currentSlideNumber].classList.add('tab__active');

function changeSlide(newSlideNumber) {
    if (newSlideNumber > tabs.length - 1) {
        currentSlideNumber = 0;
    } else if (newSlideNumber < 0) {
        currentSlideNumber = tabs.length - 1;
    } else {
        currentSlideNumber = newSlideNumber;
    }

    slider.style.backgroundImage = `url(/baner${currentSlideNumber}.webp)`;

    let activeTab = document.querySelector('.tab__active');
    if (activeTab) { activeTab.classList.remove('tab__active'); }

    tabs[currentSlideNumber].classList.add('tab__active');
}

Array.from(tabs).forEach(function(tab, i) {
    tab.addEventListener('click', () => changeSlide(i));
});

document.getElementById('prev').addEventListener('click', () => changeSlide(currentSlideNumber -= 1));
document.getElementById('next').addEventListener('click', () => changeSlide(currentSlideNumber += 1));

setInterval(() => changeSlide(currentSlideNumber += 1), 3500);