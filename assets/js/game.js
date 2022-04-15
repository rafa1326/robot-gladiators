
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var fight = function(enemyName ){
  while(playerHealth > 0 && enemyHealth > 0) {

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + ' has decided to skip this fight. Goodbye!');
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney)
      break;
    }
  }

  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died!');

    // award player money for winning
    playerMoney = playerMoney + 20;
    // leave while() loop since enemy is dead
    break;
  } else {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
  }

  // remove players's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + ' has died!');
    // leave while() loop if player is dead
    break;
  } else {
    window.alert(playerName + ' still has ' + playerHealth + ' health left.');
  }
} // end of while loop
}; // end of fight function


var startGame = function() {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  
  for (var i = 1; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  
  fight(pickedEnemyName);
 
  if (playerHealth > 0 && i < enemyNames.length - 1) {
    shop();
  }
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    if (storeConfirm) {
      shop();
    }
  
    
  if (playerHealth > 0) {
  window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
 
}
endGame();

};
//startGame();

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
};


var endGame = function() { 
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
}

// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
function shop () {
  console.log("entered the shop");
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
// use switch to carry out action
switch (shopOptionPrompt) {
  case "REFILL":
  case "refill":
    if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  
    break;
    case "UPGRADE":
    case "upgrade":
    if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
     // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  
    break;
    case "LEAVE": 
    case "leave":
    window.alert("Leaving the store.");

    // do nothing, so function will end
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");

    // call shop() again to force player to pick a valid option
    shop();
    break;
}






};
startGame();





 
  
   
   


// ;enemyHealth = enemyHealth - playerAttack;

// console.log(
//     playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
//   );// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
//   playerHealth = playerHealth - enemyAttack;
  
//   // Log a resulting message to the console so we know that it worked.
//   console.log(
//     enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
//   );// put new code under this
//   console.log(
//     playerName + " attacked " + enemyNames + "." + enemyNames + " now has " + enemyHealth + " health remaining."
//   );
  

//   else {
//     window.alert(enemyNames + " still has " + enemyHealth + " health left.");
//   }// put new code under this
// console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// // check player's health
// if (playerHealth <= 0) {
//   window.alert(playerName + " has died!");
// } 
// else {
//   window.alert(playerName + " still has " + playerHealth + " health left.");
// }