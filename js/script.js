const cards = document.querySelectorAll('.card');

cards.forEach((card) => {

    card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', rotateReset);
});

function rotate(event) {
    const cardItem = this.querySelector('.card-item');

    const width = cardItem.offsetWidth;
    const height = cardItem.offsetHeight;

    cardItem.style.transform = `rotateX(${-(event.offsetY - height / 2) / 5}deg) rotateY(${(event.offsetX - width / 2) / 5}deg)`;
}

function rotateReset() {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = `rotate(0)`;
}