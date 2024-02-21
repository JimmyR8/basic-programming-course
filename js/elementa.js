const sectionAttack = document.getElementById('select-attack')
const sectionRestar = document.getElementById('button-restar')
const buttonPetPlayer = document.getElementById('button-pet')
const buttonRestar = document.getElementById('button-restar')


const sectionPet = document.getElementById('select-pet')
const spantPetPlayer = document.getElementById('pet-player')


const spantPetPEnemy = document.getElementById('pet-enemy')


const spantPlayerLives = document.getElementById('player-lives')
const spantEnemyLives = document.getElementById('enemy-lives')


const sectionMessage = document.getElementById('result')
const palyerOfAttack = document.getElementById('player-of-attack')
const enemyOfAttack = document.getElementById('enemy-of-attack')
const containerCards = document.getElementById('container-cards')
const containerAttacks = document.getElementById('container-attacks')

let petElementa = []
let playerAttack = []
let enemyAttack = []
let elementaOptions
let inputHipodoge
let inputCapipepo
let inputRatigueya
let petPlayer
let elementasAttacks
let elementaAttacksEnemy
let buttonFire
let buttonWater
let buttonEarth
let buttons = []
let indexPlayerAttack
let indexEnemyAttack
let playerVictorys = 0
let enemyVictorys = 0
let playerLives = 3
let enemyLives = 3

class Elementa {
    constructor(name, image, life) {
        this.name = name
        this.image = image
        this.life = life
        this.attacks = []
    }
}

let hipodoge = new Elementa('Hipodoge', 'images/hipodoge.png', 5)

let capipepo = new Elementa('Capipepo', 'images/capipepo.png', 5)

let ratigueya = new Elementa('Ratigueya', 'images/ratigueya.png', 5)

hipodoge.attacks.push(
    { name: '💧', id: 'button-water'},
    { name: '💧', id: 'button-water'},
    { name: '💧', id: 'button-water'},
    { name: '🔥', id: 'button-fire'},
    { name: '🌱', id: 'button-earth'},
)

capipepo.attacks.push(
    { name: '🌱', id: 'button-earth'},
    { name: '🌱', id: 'button-earth'},
    { name: '🌱', id: 'button-earth'},
    { name: '💧', id: 'button-water'},
    { name: '🔥', id: 'button-fire'},
)

ratigueya.attacks.push(
    { name: '🔥', id: 'button-fire'},
    { name: '🔥', id: 'button-fire'},
    { name: '🔥', id: 'button-fire'},
    { name: '💧', id: 'button-water'},
    { name: '🌱', id: 'button-earth'},
)

petElementa.push(hipodoge, capipepo, ratigueya)

function startGame() {
    
    sectionAttack.style.display = 'none'
    sectionRestar.style.display = 'none'

    petElementa.forEach((elementa) => {
        elementaOptions = `
        <input type="radio" name="pet" id=${elementa.name} />
        <label class="card-of-elementa" for=${elementa.name}>
            <p>${elementa.name}</p>
            <img src=${elementa.image} alt=${elementa.name}>
        </label>
        `
    containerCards.innerHTML += elementaOptions

     inputHipodoge = document.getElementById('Hipodoge')
     inputCapipepo = document.getElementById('Capipepo')
     inputRatigueya = document.getElementById('Ratigueya')
    })

    
    buttonPetPlayer.addEventListener('click', selectionPetPlayer)  

    buttonRestar.addEventListener('click', restarGame)
}

function selectionPetPlayer() {
    
    sectionPet.style.display = 'none'

    
    sectionAttack.style.display = 'flex'

    

    if(inputHipodoge.checked) {
        spantPetPlayer.innerHTML = inputHipodoge.id
        petPlayer = inputHipodoge.id
    } else if(inputCapipepo.checked) {
        spantPetPlayer.innerHTML = inputCapipepo.id
        petPlayer = inputCapipepo.id
    } else if(inputRatigueya.checked) {
        spantPetPlayer.innerHTML = inputRatigueya.id
        petPlayer = inputRatigueya.id
    } else {
        alert('Select a pet')
        restarGame()
    }

    extractAttacks(petPlayer)
    selectionPetEnemy()
}

function extractAttacks(petPlayer) {
    let attacks
    for (let i = 0; i < petElementa.length; i++) {
        if (petPlayer === petElementa[i].name) {
            attacks = petElementa[i].attacks
        }
        
    }
    showAttacks(attacks)    
}

function showAttacks(attacks) {
    attacks.forEach((attack) => {
        elementasAttacks = `
        <button id=${attack.id} class="attacks BAttack">${attack.name}</button>
        `
        containerAttacks.innerHTML += elementasAttacks
    })

    buttonFire = document.getElementById('button-fire')
    buttonWater = document.getElementById('button-water')
    buttonEarth = document.getElementById('button-earth')
    buttons = document.querySelectorAll('.BAttack')
}

function sequenceAttack() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                playerAttack.push('FIRE')
                console.log(playerAttack)
                button.style.background = '#F72798' 
            } else if (e.target.textContent === '💧') {
                playerAttack.push('WATER')
                console.log(playerAttack)
                button.style.background = '#F72798'
            } else {
                playerAttack.push('EARTH')
                console.log(playerAttack)
                button.style.background = '#F72798'
            }
            enemyAttackRandom()
        })
    })
}

function selectionPetEnemy() {
    let petRandom = random(0, petElementa.length - 1)
    
    spantPetPEnemy.innerHTML = petElementa[petRandom].name
    elementaAttacksEnemy = petElementa[petRandom].attacks
    sequenceAttack()
}

function enemyAttackRandom() {
    let randomAttack = random(0, elementaAttacksEnemy.length -1)

    if(randomAttack == 0 || randomAttack == 1 ) {
        enemyAttack.push('FIRE')
    } else if(randomAttack == 3 || randomAttack == 4) {
        enemyAttack.push('WATER')
    } else {
        enemyAttack.push('EARTH')
    }
    console.log(enemyAttack)
    startFight()
}

function startFight() {
    if (playerAttack.length === 5) {
        combat()
    }
}

function indexBothOpponent(player, enemy) {
    indexPlayerAttack = playerAttack[player]
    indexEnemyAttack = enemyAttack[enemy]
}

function combat() {

    for (let index = 0; index < playerAttack.length; index++) {
        if (playerAttack[index] === enemyAttack[index]) {
            indexBothOpponent(index, index)
            createMenssage('TIE')
            playerVictorys++ 
            spantPlayerLives.innerHTML = playerVictorys
        } else if(playerAttack[index] == 'FIRE 🔥' && enemyAttack[index] == 'EARTH 🌱') {
            indexBothOpponent(index, index)
            playerVictorys++ 
            spantPlayerLives.innerHTML = playerVictorys
            createMenssage('YOU WIN 🥳')
        } else if(playerAttack[index] == 'WATER 💧' && enemyAttack[index] == 'FIRE 🔥') {
            indexBothOpponent(index, index)
            playerVictorys++ 
            spantPlayerLives.innerHTML = playerVictorys
            createMenssage('YOU WIN 🥳')
        } else if(playerAttack[index] == 'EARTH 🌱' && enemyAttack[index] == 'WATER 💧') {
            indexBothOpponent(index, index)
            playerVictorys++ 
            spantPlayerLives.innerHTML = playerVictorys
            createMenssage('YOU WIN 🥳')
        } else {
            indexBothOpponent(index, index)
            enemyVictorys++ 
            spantEnemyLives.innerHTML = enemyVictorys
            createMenssage('YOU LOSE 😭')
        }
    }
    reviewVictorys()
}

function reviewVictorys() {
    if(playerVictorys === enemyVictorys) { 
        endGameMessage('THIS IS A TIE 😐')
    } else if(playerVictorys > enemyVictorys) {
        endGameMessage('YOU WIN THE GAME! 🥳')
    } else {
        endGameMessage('YOU LOSE THE GAME 😢')
    }
}

function createMenssage(result) {
    let notification = document.createElement('p')
    let newPlayerOfAttack = document.createElement('p')
    let newEnemyOfAttack = document.createElement('p')

    sectionMessage.innerHTML = result
    newPlayerOfAttack.innerHTML = indexPlayerAttack
    newEnemyOfAttack.innerHTML = indexEnemyAttack

    palyerOfAttack.appendChild(newPlayerOfAttack)
    enemyOfAttack.appendChild(newEnemyOfAttack)
}

function endGameMessage(endResult) {
    
    
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