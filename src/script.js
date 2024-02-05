const profCard = document.querySelectorAll(".proff--card");

profCard.forEach(function(speciallity) {
    setTimeout(function() {
        speciallity.classList.add('proff-card-anim');
    }, 100);
});
