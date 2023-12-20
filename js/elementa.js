let playerAttack
let enemyAttack
let playerLives = 3
let enemyLives = 3

function startGame() {
    let buttonPetPlayer = document.getElementById('button-pet')
    buttonPetPlayer.addEventListener('click', selectionPetPlayer)  

    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click', fireAttack)

    let buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click', waterAttack)

    let buttonEarth = document.getElementById('button-earth')  
    buttonEarth.addEventListener('click', earthAttack)
}

function selectionPetPlayer() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spantPetPlayer = document.getElementById('pet-player')

    if(inputHipodoge.checked) {
        alert('You selected Hipodoge')
        spantPetPlayer.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked) {
        alert('You selected Capipepo')
        spantPetPlayer.innerHTML = 'Capipepo'
    } else if(inputRatigueya.checked) {
        alert('You selected Ratigueya')
        spantPetPlayer.innerHTML = 'Ratigueya'
    } else {
        alert('Select a pet')
    }

    selectionPetEnemy()
}

function selectionPetEnemy() {
    let petRandom = random(1,3)
    let spantPetPEnemy = document.getElementById('pet-enemy')
    
    if(petRandom == 1) {
        spantPetPEnemy.innerHTML = 'Hipodoge'
    } else if (petRandom == 2) {
        spantPetPEnemy.innerHTML = 'Capipepo'
    } else {
        spantPetPEnemy.innerHTML = 'Ratigueya'
    }
}

function fireAttack() {
    playerAttack = 'FIRE'
    enemyAttackRandom()
}
function waterAttack() {
    playerAttack = 'WATER'
    enemyAttackRandom()
}
function earthAttack() {
    playerAttack = 'EARTH'
    enemyAttackRandom()
}

function enemyAttackRandom() {
    let randomAttack = random(1,3)

    if(randomAttack == 1) {
        enemyAttack = 'FIRE'
    } else if(randomAttack == 2) {
        enemyAttack = 'WATER'
    } else {
        enemyAttack = 'EARTH'
    }

    combat()
}

function combat() {
    let spantPlayerLives = document.getElementById('player-lives')
    let spantEnemyLives = document.getElementById('enemy-lives')

    if(enemyAttack == playerAttack) {
        createMenssage('TIE 😐')
    } else if(playerAttack == 'FIRE' && enemyAttack == 'EARTH') {
        createMenssage('YOU WIN 🥳')
        enemyLives--
        spantEnemyLives.innerHTML = enemyLives
    } else if(playerAttack == 'WATER' && enemyAttack == 'FIRE') {
        createMenssage('YOU WIN 🥳')
        enemyLives--
        spantEnemyLives.innerHTML = enemyLives
    } else if(playerAttack == 'EARTH' && enemyAttack == 'WATER') {
        createMenssage('YOU WIN 🥳')
        enemyLives--
        spantEnemyLives.innerHTML = enemyLives
    } else {
        createMenssage('YOU LOSE 😭')
        playerLives--
        spantPlayerLives.innerHTML = playerLives
    }
}

function createMenssage(result) {
    let sectionMessage = document.getElementById('message')
    
    let text = document.createElement('p')
    text.innerHTML = 'Your pet attacked with ' + playerAttack + ', the enemy pet attacked with ' + enemyAttack + '- ' + result

    sectionMessage.appendChild(text)
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)