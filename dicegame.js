const bt = document.getElementById('bt');

bt.onclick = diceRoll;

function diceRoll(){

const num = document.getElementById("num").value;


const dice = document.getElementById('dice');


const dices = [];

for (let i=0; i < num; i++) {

const value = Math.floor(Math.random() * 6)+1;

dices.push(value);

}
 dice.textContent = `dice : ${dices.join(`,`)}` ;
}
