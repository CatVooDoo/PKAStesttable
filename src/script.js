const profCard = document.querySelectorAll(".proff--card");
const cardMoreInfo = document.querySelectorAll(".more--info");

profCard.forEach(function(speciallity) {
    setTimeout(function() {
        speciallity.classList.add('proff-card-anim');
    }, 100);
    speciallity.addEventListener('touchstart', function(){
        speciallity.classList.add('proff--card-active');
        cardMoreInfo.forEach(function(info) {
            info.classList.add('more--info-active')
        });
    });
    speciallity.addEventListener('touchend', function(){
        speciallity.classList.remove('proff--card-active');
        cardMoreInfo.forEach(function(info) {
            info.classList.remove("more--info-active")
        });
    });
});

