const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");
const alertPopUpDiv = document.getElementById("alertPopUp");

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** validate input **
const validateInput = (...inputs) => {
  // set the text of the alert div
  alertPopUpDiv.innerText =
    "Hey Looks Like You're Not Entering a Number. Please Enter The Number To Get the Tip-Amount.";
    // loop through inputs
  for (let input of inputs) {
    // if input is not a number, diplay pop-up
    if (isNaN(input)) {
      alertPopUpDiv.style.display = "block";
      return;
    }
  }
  // if input is number, hide the pop-up
  alertPopUpDiv.style.display = "none";
};

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercent = Number(tipInput.value) / 100;

  // validate bill and tip input and display pop-up
  validateInput(tipPercent, bill);

  // get the total tip amount
  const tipAmount = bill * tipPercent;

  // calculate the total (tip amount + bill)
  const total = tipAmount + bill;

  // calculate the per person total (total divided by number of people)
  const perPersonTotal = total / numberOfPeople;

  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount
  numberOfPeople += 1;

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberOfPeople <= 1) {
    return;
  }

  // decrement the amount
  numberOfPeople -= 1;

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
};
