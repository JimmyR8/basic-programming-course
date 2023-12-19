function startGame() {
    let buttonPetPlayer = document.getElementById('button-pet')
    buttonPetPlayer.addEventListener('click', selectionPetPlayer)    
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
    let attackRandom = random(1,3)
    let spantPetPEnemy = document.getElementById('pet-enemy')
    
    if(attackRandom == 1) {
        spantPetPEnemy.innerHTML = ('Hipodoge')
    } else if (attackRandom == 2) {
        spantPetPEnemy.innerHTML = ('Capipepo')
    } else {
        spantPetPEnemy.innerHTML = ('Ratigueya')
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)
