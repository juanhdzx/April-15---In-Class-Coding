// Question 1 

alert("Choose an option: 1. Deposit Money, 2. Withdraw Money");

// // Question 2
 
// let userText = prompt ("Enter here")

// var a = prompt("Deposit : ", "");
// var b = prompt("Withdraw : ", "");
// alert(a + "\n" + b); 

// if (person == null || person == "") {
//     text = "User cancelled the prompt.";
//   } else {
//     text = "Hello " + person + "! Balance:";
//   }
// let userText = prompt("How much would you like to desposit?") {
 //   return alert("Your new balance is [BALANCE]")
//}



// Question 3 

let bankBal = 1000;

while (true) {
   let tranAmount;

   let action = prompt(`Online Banking: you have currently $${bankBal}. Would you like to 'deposit' money or 'withdraw'? : `);
   action = action.toLowerCase();

   function moneyJudgement(n) {
      if (n < 0) {
         return "Low Funds"
      } else {
         return "You got moneyyyyy"
      }
   }

   if (action === 'deposit') {
      tranAmount = prompt ("How much would you like to deposit?");
      tranAmount = parseFloat(tranAmount);

      bankBal = bankBal + tranAmount;
      alert(`You deposited $${tranAmount} and your total is now $${bankBal}.  ${moneyJudgement(bankBal)} `);

   } else if (action === 'withdraw') {
      tranAmount = prompt ("How much would you like to withdraw?");
      tranAmount = parseFloat(tranAmount);

      bankBal = bankBal - tranAmount;
      alert(`You deposited $${tranAmount} and your total is now $${bankBal}. ${moneyJudgement(bankBal)}`);

   } 
}