const profCard = document.querySelectorAll(".proff--card");

profCard.forEach(function(speciallity) {
    setTimeout(function() {
        speciallity.classList.add('proff-card-anim');
    }, 100);
    speciallity.addEventListener('touchstart', function(){
        speciallity.classList.add('proff--card-active')
    });
    speciallity.addEventListener('touchend', function(){
        speciallity.classList.remove('proff--card-active')
    });
});
