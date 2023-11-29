let countNumber = 0;

const cards = document.querySelectorAll(".card");
const bottoneConteggio = document.getElementById("js-count");

bottoneConteggio.addEventListener("click", countAllTheCard);

function countAllTheCard() {
    countNumber = 0;
    for (let i = 0; i < cards.length; i++) {
        let singleCard = cards[i];
        countNumber++;
    }
    alert(`sono disponibili ${countNumber} viaggi `);
}
