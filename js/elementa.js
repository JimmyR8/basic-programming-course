const sectionAttack = document.getElementById('select-attack')
const sectionRestar = document.getElementById('button-restar')
const buttonPetPlayer = document.getElementById('button-pet')
const buttonFire = document.getElementById('button-fire')
const buttonWater = document.getElementById('button-water')
const buttonEarth = document.getElementById('button-earth') 
const buttonRestar = document.getElementById('button-restar')


const sectionPet = document.getElementById('select-pet')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spantPetPlayer = document.getElementById('pet-player')


const spantPetPEnemy = document.getElementById('pet-enemy')


const spantPlayerLives = document.getElementById('player-lives')
const spantEnemyLives = document.getElementById('enemy-lives')


const sectionMessage = document.getElementById('result')
const palyerOfAttack = document.getElementById('player-of-attack')
const enemyOfAttack = document.getElementById('enemy-of-attack')


let petElementa = []
let playerAttack
let enemyAttack
let playerLives = 3
let enemyLives = 3

class Elementa {
    constructor(name, image, life) {
        this.name = name
        this.image = image
        this.life = life
    }
}

let hipodoge = new Elementa('Hipodoge', 'images/hipodoge.png', 5)

let capipepo = new Elementa('Capipepo', 'images/capipepo.png', 5)

let ratigueya = new Elementa('Capipepo', 'images/ratigueya.png', 5)

petElementa.push(hipodoge, capipepo, ratigueya)

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
    
    sectionPet.style.display = 'none'

    
    sectionAttack.style.display = 'flex'

    

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
    
    
    sectionMessage.innerHTML = endResult

    
    buttonFire.disabled = true

    
    buttonWater.disabled = true

     
    buttonEarth.disabled = true

    
    sectionRestar.style.display = 'block'
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function restarGame() {
    location.reload()
}

window.addEventListener('load', startGame)