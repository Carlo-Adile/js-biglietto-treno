/* exercise

create a program to calculate the price of a ticket for a train ride.
The main variables are the km of the ride and the age of the customer, since the enterprise offers a discount based on the age.
the price for each km is 0.21 €.
the discount is 20% for minors (17 years old or younger) and 40% for seniors (over 65 years old).
*/

/* pseudo code

ask the customer for their age and the km of the ride.
then calculate the final price by multiplying the km for the relative price.
if the customer is 17 or less years old apply the expected discount,
else if the customer is 65 years old or older apply the expected discount.
else show the regular price.
*/


alert("welcome to Trenitalia ticket selling service machine. Please enter your details to calculate your ticket price.");

document.addEventListener('DOMContentLoaded', function() {
  checkPrice();
});

function checkPrice(){
  while(true){
    let km = prompt("please enter the expected km distance for the ride");
  let age = prompt("please enter your age");

  if (km === null || age === null) {
    return;
  }

  if (km === '' || isNaN(km)){
    alert("Error: please start again and add only numeric character!");
    continue;
  }
  else{
    console.log("you entered: " + km + "km");
  }

  if (age === '' || isNaN(age)){
    alert("Error: please start again and add only numeric character!");
    continue;
  }
  else{
    console.log("you entered: " + age + "years old");
  }

  let regularPrice = km * 0.21;
  let finalPrice;
  
  if (age < 18) {
    finalPrice = regularPrice * 0.8;
  } else if (age >= 65) {
    finalPrice = regularPrice * 0.6;
  } else {
    finalPrice = regularPrice;
  }

  let formattedPrice = finalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
  alert("The final price is: " + formattedPrice);
  break;
  }
  
}
