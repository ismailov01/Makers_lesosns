// //! JQuery events

// $(document).ready(() => {
//     console.log('Dom zagruzhen');
// })
//!onclick
// let btn = $('button')
// btn.on('click', () => {
//     console.log('Hi');
// })


// let btn = $('button')
// function sayHello(){
//     alert('HEllo')
// }

//!doubleclick
// btn.on('dblclick', sayHello)

//!focus
// let input = $('input')
// input.on('focus', () => {
//     console.log('Есть Фокус');
// })
//!blur
// input.on('blur', () => {
//     console.log('Убираем фокус');
//     if(!input.val()){
//         // alert('Данное поле обязательно для заполнения')
//         input.css('border', '2px solid red')
//     } else {
//         input.css('border', '2px solid green')

//     }
// })

//!input
// input.on('input', function(e) {
//     console.log(e);
// })

//!select при выделении содержимого input, textarea
// let input = $('input')
// input.on('select', (e) => {
//     console.log(e);
// })

// let p = $('p')
// //!Не работает 
// // p.on('select', (e) => {
//     //     console.log(e);
//     // })
    
// let strong = $('strong')
// p.on('mouseup', (e) => {
//     let selText = window.getSelection().toString()
//     strong.text('Вы выделили' + selText)
// })

//!hide, show, toggle
// let img = $('img')
// let btnHide = $('#btn-hide')
// let btnShow = $('#btn-show')
// let btntoggle = $('#btn-toggle')

// btnHide.on('click', () => {
//     img.hide(2000)
// })
// btnShow.on('click', () => {
//     img.show(1000)
// })
// btntoggle.on('click', () => {
//     img.toggle(1500)
// })

//!fadeIn, fadeOut, fadeTo, fadeToggle
// let img = $('img')
// let btnFadeOut = $('#btn-hide')
// let btnFadeIn = $('#btn-show')
// let btnFadeTo = $('#btn-to')
// let btnFadeToggle = $('#btn-toggle')

// btnFadeOut.on('click', ()=> {
//     img.fadeOut(1000)
// })
// btnFadeIn.on('click', () => {
//     img.fadeIn(1000)
// })
// btnFadeToggle.on('click', () => {
//     img.fadeToggle(1000)
// })

// let opacity = 1
// btnFadeTo.on('click', () => {
//         img.fadeTo(1000, 0.1)
// })

// //!Modal 

// let btnShowModal = $('.show-modal')
// let btnCloseModal = $('.my-modal button')
// let modal = $('.modal')
// let myModal = $('.my-modal')
// function showModal() {
//     modal.fadeIn(1000).css('display', 'flex')
    
// }
// function closeModal() {
//     modal.fadeOut(1000)
// }


// btnShowModal.on('click', showModal)
// btnCloseModal.on('click', closeModal)
// let h3 = $('.my-modal h3')
// let p = $('.my-modal p')
// modal.on('click', (e) => {
//     if(e.target !== myModal[0] && e.target !== p[0] && e.target !== h3[0]){
//         closeModal()
//     }
// })

// //! range input
// let range = $('#range')
// let img = $('img')
// range.on('change', (e) => {
//     let value = e.target.value
//     img.fadeTo(10, value)
// })




const statusDisplay = $('.game--status');

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.text(currentPlayerTurn())

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.text(currentPlayer)
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.text(currentPlayerTurn())
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        statusDisplay.text(winningMessage())
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.text(drawMessage())
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.text(currentPlayerTurn())
    $('.cell').each(cell => cell.text(""));
}


$('.cell').each(cell => cell.on('click', handleCellClick));
$('.game--restart').on('click', handleRestartGame);
 

























