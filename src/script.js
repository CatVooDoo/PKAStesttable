const profCard = document.querySelector(".proff--card");

profCard.addEventListener('touchstart', function () {
    profCard.classList.add('proff--card-hover');
});

profCard.addEventListener('touchend', function () {
    profCard.classList.remove('proff--card-hover');
    window.location.href = "https://pkas58.ru/article/070201"
});
