const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  console.log("damage to monster " + damage);
  currentMonsterHealth -= damage;
  console.log("currentMonsterHealth " + currentMonsterHealth);
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  console.log("damage to player " + playerDamage);
  currentPlayerHealth -= playerDamage;
  console.log("currentPlayerHealth " + currentPlayerHealth);
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
  }
}

attackBtn.addEventListener('click', attackHandler);
