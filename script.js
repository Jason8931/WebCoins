document.addEventListener("DOMContentLoaded", () => {
    let counter = parseInt(localStorage.getItem('counter')) || 0;
    let d = parseFloat(localStorage.getItem('increment')) || 1;
    let boughtCards = JSON.parse(localStorage.getItem('boughtCards')) || {};

    const counterElement = document.getElementById('counter');
    const clickButton = document.getElementById('clickButton');
    const incrementInput = document.getElementById('incrementInput');
    const incrementButton = document.getElementById('incrementButton');
    const incrementDInput = document.getElementById('incrementDInput');
    const incrementDButton = document.getElementById('incrementDButton');
    const shopButton = document.getElementById('shopButton');
    const shop = document.getElementById('shop');
    const buyButtons = document.querySelectorAll('.buyButton');

    const updateCounter = () => {
        counterElement.textContent = counter;
        localStorage.setItem('counter', counter);
    };

    const updateIncrement = () => {
        localStorage.setItem('increment', d);
    };

    const updateBoughtCards = () => {
        localStorage.setItem('boughtCards', JSON.stringify(boughtCards));
    };

    clickButton.addEventListener('click', () => {
        counter += d;
        updateCounter();
    });

    incrementButton.addEventListener('click', () => {
        const incrementValue = parseInt(incrementInput.value);
        if (!isNaN(incrementValue)) {
            counter = incrementValue;
            updateCounter();
        }
    });

    incrementDButton.addEventListener('click', () => {
        const incrementDValue = parseFloat(incrementDInput.value);
        if (!isNaN(incrementDValue)) {
            d = incrementDValue;
            updateIncrement();
        }
    });

    shopButton.addEventListener('click', () => {
        shop.classList.toggle('hidden');
    });

    buyButtons.forEach(button => {
        const cardId = button.parentElement.id;
        if (boughtCards[cardId]) {
            button.classList.add('bought');
            button.textContent = 'Куплено';
            button.disabled = true;
        }

        button.addEventListener('click', () => {
            if (!button.disabled && counter >= 100) {
                counter -= 100;
                d += 0.2; // +20% к изначальному числу d (d=1 -> d=1.2)
                boughtCards[cardId] = true;
                button.classList.add('bought');
                button.textContent = 'Куплено';
                button.disabled = true;
                updateCounter();
                updateIncrement();
                updateBoughtCards();
            }
        });
    });

    updateCounter();
});
