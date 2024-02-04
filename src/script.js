// const profCard = document.querySelector(".architecture");

// profCard.addEventListener('touchstart', function () {
//     profCard.classList.add('proff--card-hover');
// });

// profCard.addEventListener('touchend', function () {
//     profCard.classList.remove('proff--card-hover');
//     // window.location.href = "https://pkas58.ru/article/070201"
// });

// one two three four five

const profCard1 = document.getElementById("one");
const profCard2 = document.getElementById("two");
const profCard3 = document.getElementById("three");
const profCard4 = document.getElementById("four");
const profCard5 = document.getElementById("five");


window.onload = function() {
    setTimeout(function() {
        profCard1.classList.add('proff-card-anim')
    }, 100);
    setTimeout(function() {
        profCard2.classList.add('proff-card-anim')
    }, 200);
    setTimeout(function() {
        profCard3.classList.add('proff-card-anim')
    }, 300);
    setTimeout(function() {
        profCard4.classList.add('proff-card-anim')
    }, 400);
}
