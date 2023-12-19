let playerAttack
let enemyAttack

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

    createMenssage()
}

function createMenssage() {
    let sectionMessage = document.getElementById('message')
    
    let text = document.createElement('p')
    text.innerHTML = 'Your pet attacked with ' + playerAttack + ', the enemy pet attacked with ' + enemyAttack + '- YOU WIN! 🥳'

    sectionMessage.appendChild(text)
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)