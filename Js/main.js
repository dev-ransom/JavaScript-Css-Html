// const name = 'Ransom';
// const age = 23;

// if (name == 'Ransom' || age == 23){
//     console.log("Hello there user")
// }
// else {
//     console.log("wrong input")
// }

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