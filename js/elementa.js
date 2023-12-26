let sectionAttack = document.getElementById('select-attack')
let sectionRestar = document.getElementById('button-restar')
let buttonPetPlayer = document.getElementById('button-pet')
let buttonFire = document.getElementById('button-fire')
let buttonWater = document.getElementById('button-water')
let buttonEarth = document.getElementById('button-earth') 
let buttonRestar = document.getElementById('button-restar')

let playerAttack
let enemyAttack
let playerLives = 3
let enemyLives = 3

function startGame() {
    
    sectionAttack.style.display = 'none'
    sectionRestar.style.display = 'none'

    
    buttonPetPlayer.addEventListener('click', selectionPetPlayer)  

    
    buttonFire.addEventListener('click', fireAttack)
    
    buttonWater.addEventListener('click', waterAttack)
     
    buttonEarth.addEventListener('click', earthAttack)

    
    
    buttonRestar.addEventListener('click', restarGame)
}

function selectionPetPlayer() {
    let sectionPet = document.getElementById('select-pet')
    sectionPet.style.display = 'none'

    let sectionAttack = document.getElementById('select-attack')
    sectionAttack.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spantPetPlayer = document.getElementById('pet-player')

    if(inputHipodoge.checked) {
        spantPetPlayer.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked) {
        spantPetPlayer.innerHTML = 'Capipepo'
    } else if(inputRatigueya.checked) {
        spantPetPlayer.innerHTML = 'Ratigueya'
    } else {
        alert('Select a pet')
        restarGame()
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
    playerAttack = 'FIRE 🔥'
    enemyAttackRandom()
}

function waterAttack() {
    playerAttack = 'WATER 💧'
    enemyAttackRandom()
}

function earthAttack() {
    playerAttack = 'EARTH 🌱'
    enemyAttackRandom()
}

function enemyAttackRandom() {
    let randomAttack = random(1,3)

    if(randomAttack == 1) {
        enemyAttack = 'FIRE 🔥'
    } else if(randomAttack == 2) {
        enemyAttack = 'WATER 💧'
    } else {
        enemyAttack = 'EARTH 🌱'
    }

    combat()
}

function combat() {
    let spantPlayerLives = document.getElementById('player-lives')
    let spantEnemyLives = document.getElementById('enemy-lives')

    if(enemyAttack == playerAttack) {
        createMenssage('TIE 😐')
    } else if(playerAttack == 'FIRE 🔥' && enemyAttack == 'EARTH 🌱') {
        enemyLives--
        spantEnemyLives.innerHTML = enemyLives
        createMenssage('YOU WIN 🥳')
    } else if(playerAttack == 'WATER 💧' && enemyAttack == 'FIRE 🔥') {
        enemyLives--
        spantEnemyLives.innerHTML = enemyLives
        createMenssage('YOU WIN 🥳')
    } else if(playerAttack == 'EARTH 🌱' && enemyAttack == 'WATER 💧') {
        enemyLives--
        spantEnemyLives.innerHTML = enemyLives
        createMenssage('YOU WIN 🥳')
    } else {
        playerLives--
        spantPlayerLives.innerHTML = playerLives
        createMenssage('YOU LOSE 😭')
    }

    reviewLives()
}

function reviewLives() {
    if(enemyLives == 0) { 
        endgameMessage('YOU WIN THE GAME 🥳')
    } else if(playerLives == 0) {
        endgameMessage('YOU LOST THE GAME 😢')
    }
}

function createMenssage(result) {
    let sectionMessage = document.getElementById('result')
    let palyerOfAttack = document.getElementById('player-of-attack')
    let enemyOfAttack = document.getElementById('enemy-of-attack')

    let notification = document.createElement('p')
    let newPlayerOfAttack = document.createElement('p')
    let newEnemyOfAttack = document.createElement('p')

    sectionMessage.innerHTML = result
    newPlayerOfAttack.innerHTML = playerAttack
    newEnemyOfAttack.innerHTML = enemyAttack

    palyerOfAttack.appendChild(newPlayerOfAttack)
    enemyOfAttack.appendChild(newEnemyOfAttack)
}

function endgameMessage(endResult) {
    let sectionMessage = document.getElementById('result')
    
    sectionMessage.innerHTML = endResult

    let buttonFire = document.getElementById('button-fire')
    buttonFire.disabled = true

    let buttonWater = document.getElementById('button-water')
    buttonWater.disabled = true

    let buttonEarth = document.getElementById('button-earth')  
    buttonEarth.disabled = true

    let sectionRestar = document.getElementById('button-restar')
    sectionRestar.style.display = 'block'
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function restarGame() {
    location.reload()
}

window.addEventListener('load', startGame)