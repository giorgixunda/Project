const board = document.getElementById("game-board");
const statuss = document.getElementById("status");
let cards = [];
let cardValues = [];
let moves = 0;

function initializeGame(){
    const values = ["A", "A", "B", "B", "C", "C", "D", "D"];
    values.sort(() => Math.random() - 0.5);
    values.forEach(value => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.value = value;
        card.addEventListener("click", flipCard);
        cards.push(card);
    });
    renderBoard()
}

function renderBoard(){
    board.innerHTML = ' ';
    cards.forEach(card => {
        board.appendChild(card);
    });
}


function flipCard() { 
    if (cardValues.length == 2) return;
    this.textContent = this.dataset.value;
    cardValues.push(this);
    if (cardValues.length == 2){
        moves ++;
        statuss.textContent = `Moves: ${moves}`; 
        checkMath(); 
    }
}

function checkMath(){
    const [firstCard, secondCard] = cardValues;
    if(firstCard === secondCard){
        cardValues = [];
        return;
    }
    if (firstCard.dataset.value == secondCard.dataset.value){ 
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
    } else {
        setTimeout(function(){
            firstCard.textContent = ' ';
            secondCard.textContent = ' ';
        }, 1000);
    }
    cardValues = [];
}

initializeGame();

