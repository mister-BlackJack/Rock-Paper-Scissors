const body = document.querySelector('body')
let computerScore = 0
let playerScore = 0

function rock() {
    gameStart(0)
}

function paper() {
    gameStart(1)
}

function scissors() {
    gameStart(2)
}

function gameStart(playChoose) {
    const compChoose = computerChoose()
    let gameResult = 'draw'
    let computerChooseElementText 
    let computerCurrentScore = 0
    let playerCurrentScore = 0
    
    // 0 = rock, 1 = paper, 2 = scissors
    if( compChoose === 0 && playChoose === 2) {
        gameResult = 'computer win'
        computerCurrentScore = 1
        playerCurrentScore = 0
    } else if( compChoose === 1 && playChoose === 0) {
        gameResult = 'computer win'
        computerCurrentScore = 1
        playerCurrentScore = 0
    } else if( compChoose === 2 && playChoose === 1) {
        gameResult = 'computer win'
        computerCurrentScore = 1
        playerCurrentScore = 0
    } else if( compChoose === 2 && playChoose === 0) {
        gameResult = 'you win'
        computerCurrentScore = 0
        playerCurrentScore = 1
    } else if( compChoose === 0 && playChoose === 1) {
        gameResult = 'you win'
        computerCurrentScore = 0
        playerCurrentScore = 1
    } else if( compChoose === 1 && playChoose === 2) {
        gameResult = 'you win'
        computerCurrentScore = 0
        playerCurrentScore = 1
    }

    computerScore += computerCurrentScore
    playerScore += playerCurrentScore

    if(compChoose === 0) computerChooseElementText = 'rock'
    if(compChoose === 1) computerChooseElementText = 'paper'
    if(compChoose === 2) computerChooseElementText = 'scissors'

    const textResultgame = document.createElement('h2') 
    const textScoregame = document.createElement('h2') 
    textResultgame.classList.add('result')
    textScoregame.classList.add('score')
    textResultgame.innerText = `Computer choose ${computerChooseElementText} - ${gameResult}`
    textScoregame.innerText = `Computer score is ${computerScore} player score is ${playerScore}`

    cleaning()

    const container = document.querySelector('.container')
    const containerTitle = document.createElement('div')
    containerTitle.classList.add('containerTitle')
    containerTitle.appendChild(textResultgame)
    containerTitle.appendChild(textScoregame)
    container.insertAdjacentElement('beforebegin', containerTitle)

    
}

function computerChoose() {
    return Math.floor(Math.random() * 3)
}

function cleaning() {
    const containerTitle = document.querySelector('.containerTitle')
    if(containerTitle) {
        containerTitle.parentNode.removeChild(containerTitle)
    }

}

