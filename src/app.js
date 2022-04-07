import './styles/style.scss';

// Объявляем слайдер с изображениями и кнопками под ним
const slider = document.querySelector('.main__img');
const tabs = document.getElementsByClassName('tabs');

// Объявляем номер текущего слайда и добавляем класс для стилизации активной кнопки слайда
let currentSlideNumber = 0;
tabs[currentSlideNumber].classList.add('tab__active');

// Функция, принимающая номер слайда и меняющая изображение и цвет кнопки
function changeSlide(newSlideNumber) {
    if (newSlideNumber > tabs.length - 1) {
        currentSlideNumber = 0;
    } else if (newSlideNumber < 0) {
        currentSlideNumber = tabs.length - 1;
    } else {
        currentSlideNumber = newSlideNumber;
    }

    slider.style.backgroundImage = `url(./baner${currentSlideNumber}.webp)`;

    let activeTab = document.querySelector('.tab__active');
    if (activeTab) { activeTab.classList.remove('tab__active'); }

    tabs[currentSlideNumber].classList.add('tab__active');
}

// Назначаем обработчик события на все кнопки слайдера
Array.from(tabs).forEach(function(tab, i) {
    tab.addEventListener('click', () => changeSlide(i));
});

// Инициализируем кнопки для мобильной версии и назначаем на них обработчик события для смены слайдов 'вперед-назад'
document.getElementById('prev').addEventListener('click', () => changeSlide(currentSlideNumber -= 1));
document.getElementById('next').addEventListener('click', () => changeSlide(currentSlideNumber += 1));

// Подключаем таймер, который каждые 3.5 секунды сменяет слайд
setInterval(() => changeSlide(currentSlideNumber += 1), 3500);