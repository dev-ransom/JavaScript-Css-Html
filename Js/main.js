const familyName = ["Sunday","Esther","Success","Stanley","Daniel","Ransom","Destiny","Gideon","George",'Benjamin'];
const lastName = ['Asukwo','Idung','Usuyak'];
const fullName = familyName.concat(lastName);
const rever = fullName.reverse();
const specificName = fullName.splice(0,5)
document.getElementById("practice").innerHTML = specificName;
