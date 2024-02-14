const profCard = document.querySelectorAll(".proff--card");
const cardMoreInfo = document.querySelectorAll(".more--info");

const proffIndex = ['https://pkas58.ru/article/070201', 'https://pkas58.ru/article/080201', 'https://pkas58.ru/article/090207',
'https://pkas58.ru/article/540120']


profCard.forEach(function (speciallity) {
    setTimeout(() => {
        speciallity.classList.add('proff-card-anim')
    }, 200);
});

profCard.forEach(function (speciallity) {
    speciallity.addEventListener('touchstart', function (event) {
        event.stopPropagation();
        if (speciallity.classList.contains('proff--card-active')) {
            const index = Array.from(profCard).indexOf(speciallity);
            speciallity.classList.add('progg--card-touch');
            window.location.assign(proffIndex[index]);  
            
        } else {
            speciallity.classList.add('proff--card-active');
            const index = Array.from(profCard).indexOf(speciallity);
            setTimeout(function() {
                cardMoreInfo[index].classList.add('more--info-active');
            }, 1);
        }
    });
});

document.addEventListener('touchstart', function(event) {
    if (!event.target.closest('.proff--card-active')) {
        profCard.forEach(function(speciallity) {
            speciallity.classList.remove('proff--card-active');
            const index = Array.from(profCard).indexOf(speciallity);
            cardMoreInfo[index].classList.remove('more--info-active');
        });
    }
});
