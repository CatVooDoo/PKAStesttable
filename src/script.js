// proff--card
const profCard = document.querySelector(".proff--card");

// proff--card-hover

profCard.addEventListener('touchstart', function () {
    profCard.classList.add('proff--card-hover');
    console.log('класс добавлен');
});

profCard.addEventListener('touchend', function () {
    profCard.classList.remove('proff--card-hover');
    console.log('класс добавлен');
});
