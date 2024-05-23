// Получаем элементы
const countElement = document.getElementById('count');
const clickButton = document.getElementById('clickButton');
const setButton = document.getElementById('setButton');
const newCountInput = document.getElementById('newCount');

// Проверяем, есть ли значение в локальном хранилище, и устанавливаем счётчик
if(localStorage.getItem('clickCount')) {
    countElement.textContent = localStorage.getItem('clickCount');
}

// Обработчик нажатия на кнопку
clickButton.addEventListener('click', () => {
    let count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
    localStorage.setItem('clickCount', count);
});

// Обработчик установки нового значения
setButton.addEventListener('click', () => {
    let newCount = parseInt(newCountInput.value);
    countElement.textContent = newCount;
    localStorage.setItem('clickCount', newCount);
    newCountInput.value = ''; // Очистить поле ввода после установки нового значения
});