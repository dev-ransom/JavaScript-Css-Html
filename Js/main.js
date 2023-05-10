
// eligibility for discount
const isNewCustomer = true;
const totalPurchaseAmount = 120;
const isEligibleForDiscount = isNewCustomer || totalPurchaseAmount > 100;
const Eligible = "you are eligible for a discount!";
const notElig = "you don't meet the requirements";
if (isEligibleForDiscount){
    console.log(Eligible)
}
else {
    console.log(notElig);
}

// Qualification for driver license

let age = 20;
let hasLicense = true;
let hasCar = false;

if (age >= 18 && hasLicense && !hasCar){
    console.log("You can get a driver's license");
}
else{
    console.log("You can't get a driver's license");

}