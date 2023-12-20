#   GAME ELEMENTA! 🔥 | 💧 | 🌱

Welcome to the Pet Battle Game! Engage in epic battles between adorable pets and test your strategic prowess. Choose your pet wisely and unleash powerful elemental attacks to emerge victorious.

---

## 🚀 Getting Started

To embark on your pet battle journey, simply open the index.html file in your favorite web browser. Let the pet battles begin!

## 🎮 Gameplay

1. Choose Your Pet 🐶:
- Click the "Choose Your Pet" button to select your loyal companion from the options: Hipodoge, Capipepo, or Ratigueya.

2. Pick Your Attack 💥:
- After selecting your pet, choose your attack wisely by clicking one of the elemental buttons: Fire, Water, or Earth.

3. Battle Commences ⚔️:
- The enemy pet will randomly select its attack.
- Elemental strengths and weaknesses will determine the battle outcome.

4. Win or Lose 🏆/🚑:
- Victory is yours if your pet defeats the enemy.
- Lose a life if the enemy prevails in battle.

5. Game Over 🎉/😭:
- Continue battling until either you or the enemy pet runs out of lives.
- Celebrate if you win! Commiserate if you lose.
- Choose to restart the game for another round of pet battles.

## 🔥 Elemental Strengths and Weaknesses
- Fire 🔥 > Earth 🌍
- Water 💧 > Fire 🔥
- Earth 🌍 > Water 💧

## 📜 Special Messages
- Messages will be displayed after each battle, indicating ties, victories, or defeats.
- Receive game-over notifications and restart options.

## 🔄 Restarting the Game
If you're up for the challenge again, hit the "Restart Game" button at the end of the game.

Enjoy the delightful Pet Battle Game, where cute meets strategy, and may the best pet emerge triumphant! 🏅

---

> [!IMPORTANT]
> ## Code HTML and JS.
> ## HTML
> A container that groups related elements. Contains `<label>` and `<input>` tags for pet selection, as well as a button.
`<label>` and `<input>` tags: Used to label and select a pet. A set of three pets (Hipodoge, Capipepo, Ratigueya) with associated radio buttons is provided.
```
   <section id="select-pet">
            <h2>Select your pet:</h2>

   <label for="hipodoge">Hipodoge</label>
   <input type="radio" name="pet"id="hipodoge"/>
          
   <label for="capipepo">Capipepo</label>
   <input type="radio" name="pet"id="capipepo"/>
          
   <label for="ratigueya">Ratigueya</label>
   <input type="radio" name="pet"id="ratigueya"/>
</section>
```
---
button used to confirm the pet selection.
```
<button id="button-pet">Select</button>
```
---

`<section id="select-attack">`: Another container for attack selection. Contains information about pet lives and buttons for attacks.
`<p>`: Paragraphs containing information about pet lives and available attacks.
`<button>` buttons: Represent different types of attacks (Fire, Water, Earth) with associated emojis.
```
<section id="select-attack">
            <h2>Select your attacks</h2>
            <p>Your pet <span id="pet-player"></span> has <span id="player-lives">3</span> lives</p>
            <p>The enemy's pet <span id="pet-enemy"></span> has <span id="enemy-lives">3</span> lives</p>

            <p>
                <button id="button-fire">Fire 🔥</button>
                <button id="button-water">Water 💧</button>
                <button id="button-earth">Earth 🌱</button>
           </p>
        </section>
```

---

`<section id="message">`: A container probably intended to display messages during gameplay. It is currently empty and can be manipulated using JavaScript.
```
<section id="message">
        </section>
```

---

`<section id="restart">`: Contains a button with the id `"button-restart"`, which is probably used to restart the game.
```
<section id="restart">
            <button id="button-restar">Restart</button>
        </section>
```

---

`<script src="js/elementa.js"></script>`: Includes an external script file named "elementa.js". This file will contain JavaScript code that will provide logic and interactivity to the game.
```
<script src="js/elementa.js"></script>
```
