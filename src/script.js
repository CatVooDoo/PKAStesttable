const profCard = document.querySelectorAll(".proff--card");
const cardMoreInfo = document.querySelectorAll(".more--info");

// URL адреса специальностей
const proffIndex = ['https://pkas58.ru/article/070201', 'https://pkas58.ru/article/080201', 'https://pkas58.ru/article/090207', 'https://pkas58.ru/article/540120'];

profCard.forEach(function (speciallity) {
    setTimeout(() => {
        speciallity.classList.add('proff-card-anim');
    }, 200);
});

profCard.forEach(function (speciallity) {
    speciallity.addEventListener('touchstart', function (event) {
        event.stopPropagation();
        if (speciallity.classList.contains('proff--card-active')) {
            const index = Array.from(profCard).indexOf(speciallity);
            speciallity.classList.add('progg--card-touch'); 
            window.location.href = proffIndex[index]; // отправка на страницу пкаса
        } else {
            // скрытие первой карточки
            profCard.forEach(function (otherCard) {
                if (otherCard !== speciallity) {
                    otherCard.classList.remove('proff--card-active');
                    const otherIndex = Array.from(profCard).indexOf(otherCard);
                    cardMoreInfo[otherIndex].classList.remove('more--info-active');
                }
            });

            speciallity.classList.add('proff--card-active');
            const index = Array.from(profCard).indexOf(speciallity);
            setTimeout(() => {
                cardMoreInfo[index].classList.add('more--info-active');
            }, 1);
        }
    });
});

document.addEventListener('touchstart', function (event) {
    if (!event.target.closest('.proff--card-active')) {
        profCard.forEach(function (speciallity) {
            speciallity.classList.remove('proff--card-active');
            const index = Array.from(profCard).indexOf(speciallity);
            cardMoreInfo[index].classList.remove('more--info-active');
        });
    }
});
