/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastButton = document.querySelector('.forecast-btn');
const container = document.querySelector(".forecasts");

const forecastTemplate = document.querySelector('#forecast-item');
const newForecast = document.querySelector('.current-forecast');

//Генерация предсказаний
function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
} 

forecastButton.addEventListener('click', function () {
    const number = generateRandomInt(1, 6);
    let prediction = '';

    if (number == 1) {
        prediction = 'Ты станешь спортивнее и сильнее!';
    }
    if (number == 2) {
        prediction = 'Зима будет теплой и солнечной!';
    }
    if (number == 3) {
        prediction = 'Завтра будет хорошая погода!';
    }
    if (number == 4) {
        prediction = 'Сырники получатся одинаково круглыми и красивыми!';
    }
    if (number == 5) {
        prediction = 'Ты скоро встретишься с семьей!'
    }

    newForecast.querySelector('h1').textContent = prediction;
      
    //Генерация случайного %
    const percentage = Math.floor(Math.random() * 100) + "%";
    newForecast.querySelector('p').textContent = percentage;
    const joinForecast = makeForecastByTemplate(prediction, percentage);
    container.append(joinForecast);
})

//Шаблон предсказаний
function makeForecastByTemplate(title, percentage) {
    const myForecast = forecastTemplate.content.cloneNode(true);

    myForecast.querySelector('h3').textContent = title;
    myForecast.querySelector('p').textContent = percentage;

    return myForecast;
}