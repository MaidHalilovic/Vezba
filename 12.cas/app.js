const nekaVarijabla = [13, 3, 10, 92, 22,56, 100];

// const novaVarijbla = nekaVarijabla.map((el) => {
//     if(el % 2 !== 0) {
//         return el * el;
//     }
//     return el;
// })
// console.log(novaVarijbla);


// const novaVarijbla = nekaVarijabla.filter((el) => (el * 3) %  2 !== 0); 

// console.log(novaVarijbla)

const DATA1 = [2,26,38,75,11,29];
const DATA2 = ["a","b","c","d","e"];


const DATA3 = DATA1.concat(DATA2);

const pomocniNiz = DATA3.filter((el) => el % 2 === 0);

console.log(DATA3);

pomocniNiz.unshift(10,20);
console.log(pomocniNiz)

/////////////////////////2.zadatak///////////////////////////////////

const numbers2 = [2,5,10,3,4,8];

const nizKvadrata =  numbers2.map((el) => el * el)
console.log("novi niz koji sadrzi kvadrat brojeva:",nizKvadrata)

///////////////////////////3.zadatak//////////////////////////////////////////////

const numbers3 = [4, 9, 16, 25, 36];

// const KvadratniKoren = numbers3.map((el) => el / 2)
// console.log("kvadratnikoren:",KvadratniKoren);

//////////////////////////4.zadatak/////////////////////////////////////////

const numbers4 = [13,17,30,2,40,24,53]

// const kvadratibrojeva = brojeviNaKvadrat.map((el) => el[0,3,5] * el)
// console.log(kvadratibrojeva);
///////////////////////////////6.zdatak/////////////////////////////////////////

const FilterNiz = [13,24,50,32,55,11,9]

const parniBrojevi = FilterNiz.filter((el) => el % 2 === 0)
console.log("parni brojevi:",parniBrojevi)

///////////////////////////////////7.zadatak///////////////////////////////////////

const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];

const DrugoSlovoE = words.filter((el) => el[1] === "e")
console.log("reci koje u sebi sadrze slovo E:",DrugoSlovoE);

//////////////////////////////////8.zadatak///////////////////////////////////////////

const words1 = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];

const ManjiOdSest = words1.filter((el) => el.length <= 6)
console.log(ManjiOdSest);

//////////////////////////////////////////////////////////////////////////////////////