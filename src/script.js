const profCard = document.querySelectorAll(".proff--card");
const cardMoreInfo = document.querySelectorAll(".more--info");

profCard.forEach(function (speciallity) {
    setTimeout(function () {
        speciallity.classList.add('proff-card-anim');
    }, 200);
});


profCard.forEach(function (speciallity) {
    speciallity.addEventListener('touchstart', function (event) {
        event.stopPropagation();
        speciallity.classList.add('proff--card-active');
        const index = Array.from(profCard).indexOf(speciallity);
        setTimeout(function() {
            cardMoreInfo[index].classList.add('more--info-active');
        },10)
        
    });
    speciallity.addEventListener('touchend', function () {
        speciallity.classList.remove('proff--card-active');
        const index = Array.from(profCard).indexOf(speciallity);
        setTimeout(function () {
            cardMoreInfo[index].classList.remove('more--info-active');
        });
        
    });
});
