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
}

window.addEventListener('load', startGame)
