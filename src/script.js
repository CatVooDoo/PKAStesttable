const profCard = document.querySelectorAll(".proff--card");
const cardMoreInfo = document.querySelectorAll(".more--info");

    profCard.forEach(function(speciallity) {
        setTimeout(function() {
            speciallity.classList.add('proff-card-anim');
        }, 100);
        // speciallity.addEventListener('touchstart', function(){
        //     speciallity.classList.add('proff--card-active');
        //     cardMoreInfo.forEach(function(info) {
        //         info.classList.add('more--info-active')
        //     });
        // });
        // speciallity.addEventListener('touchend', function(){
        //     speciallity.classList.remove('proff--card-active');
        //     cardMoreInfo.forEach(function(info) {
        //         info.classList.remove("more--info-active")
        //     });
        // });
    });


profCard.forEach(function(speciallity) {
    speciallity.addEventListener('touchstart', function(event) {
        event.stopPropagation();
        speciallity.classList.add('proff--card-active');
        const index = Array.from(profCard).indexOf(speciallity);
        cardMoreInfo[index].classList.add('more--info-active');
    });
    speciallity.addEventListener('touchend', function() {
        speciallity.classList.remove('proff--card-active');
        const index = Array.from(profCard).indexOf(speciallity);
        cardMoreInfo[index].classList.remove('more--info-active');
    });
});
