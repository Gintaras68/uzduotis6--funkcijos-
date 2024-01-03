console.log('-----------------    1    --------------------');

console.log('Perduodam du skaičius:  5  ir  6 . Sudauginus gauname:');
showMultiply(5, 6);

function showMultiply(a, b) {
  console.log(a * b);
}

console.log('\n-----------------    2    --------------------');

helloUser('Gintaras');

function helloUser(name) {
  console.log('Helo, ' + name);
}


console.log('\n-----------------    3    --------------------');

let eilute = "Vienas ežys ėjo per tiltelį.";
simbolsCounter(eilute);

function simbolsCounter(text) {
  console.log('Eilutėje "' + text + '" yra ' + text.length + ' simbolių.');
}


console.log('\n-----------------    4    --------------------');

initials('Gintaras', 'Misevičius');

function initials(firstName, secondName) {
  console.log('Žmogaus ' + firstName + ' ' + secondName + ' inicialai: ' + firstName.charAt(0).toUpperCase() + secondName.charAt(0).toUpperCase());
}


console.log('\n-----------------    5    --------------------');

numberToHTML(145);

function numberToHTML(number) {
  document.getElementById('numberPlace').innerHTML = number;
}


console.log('\n-----------------    7    --------------------');

let fromNumber = 5;
let toNumber = 25;
for (let i = 0; i < 10; i++) {
  console.log( (i + 1) + ' skaičius nuo ' + fromNumber + ' iki ' + toNumber + ' : ' + randomNumber(5, 25));
}

function randomNumber(min = 0, max = 1) {
  return min + Math.round(Math.random() * (max - min));
}


console.log('\n-----------------    8    --------------------');

threeNumbers();

function threeNumbers() {
  let string = '';
  for (let i = 0; i < 3 ; i++) {
    string += Math.round(Math.random() * 5) + ',';
  }
  console.log('Trys sugeneruoti 0...5 skaičiai: ' + string.substring(0, string.length - 1));
}


console.log('\n-----------------    9    --------------------');

tenTags();

function tenTags() {
  let html = '';
  for (let i = 0; i < 10; i++) {
    html += '<p>' + (1 + Math.round(Math.random() * 9)) + '</p>';
  }
  document.getElementById('sequence').innerHTML = html;
}


console.log('\n--------  Vidutinis  1    --------------------');

let number = 12;
let degree = 6;
console.log('Skaičius ' + number + ' keliamas ' + degree + ' laipsniu ir gaunasi ' + exp(number, degree));

function exp(number, indi) {
  let rezult = number;
  for (let i = 1; i < indi; i++) {
    rezult *= number;
  }
  return rezult;
}


console.log('\n--------  Vidutinis  2    --------------------');

involution(3, 3, 'vidutinis2'); 

function involution(number, index, id) {
  document.getElementById(id).innerHTML += number + ' pakėlus ' + index + ' laipsniu: ' + exp(number, index);
}



// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
console.log('\n--------  Sunkus  1    --------------------');
// viską formuoju papildomo <div> bloko viduje

textToHeader("Sunki užduotis Nr.1");

function textToHeader(text) {
  document.querySelector('.sunkus').innerHTML += '<h1>' +  text + '</h1>';
}


console.log('\n--------  Sunkus  2    ---------------------');

headerText('Sunki užduotis Nr.2', 2);

function headerText(text, level) {
  document.querySelector('.sunkus').innerHTML += `<h${level}>${text}</h${level}>`;
}



console.log('\n--------  Sunkus  3    ---------------------');



const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let counter = 10;
let result = '';
let html = '';
for (let i = 0; i < counter; i++) {
  result += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log('Eilutė: ' + result);

for (let i = 0; i < result.length; i++) {
  const symbol = result[i];
  
  if (isNaN(symbol)) {
    if (html.length > 0) {
      headerText(html, 1);
      html = '';
    }
    document.querySelector('.sunkus').innerHTML += `<p>${symbol}</p>`;
  } else {
    html += symbol;
  }
}

if (html.length > 0) {
  headerText(html, 1);
}


console.log('\n--------  Sunkus  4    ---------------------');
// Parašykite funkciją, kuri skaičiuotų, 
// iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).
let parameter = 12;
console.log('Sakičius ' + parameter + ' dalijasi iš sveikų skaičių ' + evenDividers(parameter) + ' kartus.');

function evenDividers(number) {
  let counter = 0;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      counter++;
    }
  }
  return counter;
}


console.log('\n--------  Sunkus  5    ---------------------');
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. 
// Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
let count = 100; //  kiek skaiciu generuoti
let numbersArray = [];
for (let i = 0; i < count; i++) {
  numbersArray.push(randomNumber(33, 77));
}
console.log(numbersArray);

numbersArray.sort((a, b) => {
  return evenDividers(b) - evenDividers(a);
})
console.log(numbersArray);

// numbersArray.forEach(number => {
//   console.log( number + ' dalijasi ' + evenDividers(number) + ' kartus.');
// });


console.log('\n--------  Sunkus  6    ---------------------');
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. 
// Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.
count = 100; //  kiek skaiciu generuoti
numbersArray = [];
for (let i = 0; i < count; i++) {
  numbersArray.push(randomNumber(333, 777));
}
console.log('Šimtas skaičių  333...777 : ' + numbersArray);

let noPrimaryArray = numbersArray.filter((number, index, array) => {return evenDividers(number) > 0})

console.log('Atmetus pirminius skaičius: ' + noPrimaryArray);

let primaryArray = numbersArray.filter((number, index, array) => {return evenDividers(number) == 0})
console.log('Rasti pirminiai: ' + primaryArray);


console.log('\n--------  Sunkus  7    ---------------------');
// Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, 
// kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, 
// o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. 
// Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;

let itterations = randomNumber(10, 30);    //  kiek masyvų kursime
let bigArray = genArr(itterations);

console.log(bigArray);

function genArr(itterator) {
  let length = randomNumber(10, 20);
  // console.log('Kurti ' + itterator + ' masyvą iš ' + length + ' elementų.');
  let array = [];
  for (let i = 0; i < length; i++) {
    if (i == length - 1) {
      //  paskutinis elementas -  arba nulis arba naujas masyvas
      if (itterator > 1) {
        array.push(genArr(itterator - 1));  //  mažinam skaitliuką ir imames naujo masyvo
      } else {
        array.push(0);                      //  paskutinis elementas paskutiniame masyve
      }
    } else {
      array.push(randomNumber(0, 10));
    }
  }
  return array;
}


console.log('\n--------  Sunkus  8    ---------------------');
// Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. 
// Skaičiuoti reikia visuose masyvuose ir submasyvuose.

let summ = arrNumbersSumm(bigArray);
console.log('Gauta suma: ' + summ);

function arrNumbersSumm(array) {
  let summ = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!Array.isArray(element)) {
      summ += element;                  //  jei ne masyvas - pridedame elemento reikšmę
    } else {
      summ += arrNumbersSumm(element);  // o jei masyvas - paleidžiam naują funkciją
    }
  }
  return summ;
}


console.log('\n--------  Sunkus  9    ---------------------');
// Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. 
// Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, 
// prie masyvo pridėkite dar vieną elementą - atsitiktinį skaičių nuo 1 iki 33. 
// Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. 
// Kartokite, kol sąlyga nereikalaus pridėti elemento. 

let array9 = [];
addArrElement(array9,3);

while (atLastOneNoPrimary(array9)) {
  addArrElement(array9, 1);
}

console.log(array9);

function atLastOneNoPrimary(array) {
  for (let i = 0; i < 3; i++) {
    if (!isPrimary(array[array.length - (i + 1)])) {
      return true;
    } 
  }
  return false;
}

function addArrElement(arr = array9, count = 1) {
  for (let i = 0; i < count; i++) {
    arr.push(randomNumber(1, 33));
  }
}

function isPrimary(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}


console.log('\n--------  Sunkus  10    ---------------------');
/*Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. 
     Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, 
    suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3.
     Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite. 
*/

// formuojame masyvą
let size = 10
let array10 = [];
for (let eil = 0; eil < size; eil++) {
  let line = [];
  for (let stulp = 0; stulp < size; stulp++) {
      line.push(randomNumber(0, 100));
  }
  array10.push(line);
}

// kol pirminių vidurkis mažas - didinam mažiausius skaitmenis
while (averagePrimary(array10) < 50) {
  index = minValueInArray(array10);
  array10[index[0]][index[1]] += 3;
}
console.log(array10);

// paskaičiuojame pirminių vidurkį
function averagePrimary(array) {
  let summ = 0;
  let count = 0;
  for (let eil = 0; eil < size; eil++) {
    for (let stulp = 0; stulp < size; stulp++) {
      let el = array[eil][stulp];
      if(isPrimary(el)) {   //  jei pirminis:
        summ += el;         //                prisumuojame eilinį pirminį sk.
        count++;            //                padidinam rastų skaičių skaitliuką
      }
    }
  }
  console.log('Funkcija - pirminių vidurkis ' + Math.round(summ / count));
  return Math.round(summ / count);      //    paskaičiuojame vidurkį (privedam iki sveiko skaičiaus)
}


// randame mažiausią reikšmę turinčio elemento indeksą
function minValueInArray(array) {
  let minInd = [0,0];
  let minValue = 100;
  for (let eil = 0; eil < size; eil++) {
    for (let stulp = 0; stulp < size; stulp++) {
      let el = array[eil][stulp];
      if (el < minValue) {
        minValue = el;
        minInd[0] = eil;
        minInd[1] = stulp;
      }
    }
  }
  console.log('Funkcija - minimali reikšmė:  ' + minValue + ' randasi [' + minInd[0] + '][' + minInd[1] + ']');
  return minInd;
}


console.log('\n--------  Sunkus  11    ---------------------');
/* Sukurkite funkciją kuri priimtų vieną parametrą, HTML elemento id. 
Ši funkcija paims prieš tai jau minėtą HTML elementą, iš jo paims skaičių, ir 
  išspausdins visus variantus koks galėjo būti pirminis skaičius kurį kėlėme laipsniu. 
    pvz jei į antrąją funkciją padavėme 2 ir kėlėme 4 laipsniu, ir gavome skaičių 16, 
    tai ši funkcija turėtų išspausdinti, kad pradžioje greičiausiai turėjome skaičių 2 pakeltą 4 laipsniu, 
    arba skaičių 4 pakeltą 2 laipsniu.
*/

console.log('\n--------  Sunkus  11    ---------------------');
/*  Sugeneruokite masyvą, kurio ilgis atsitiktinai kinta nuo 10 iki 100. Masyvo reikšmes sudaro atsitiktiniai skaičiai 0-100 ir masyvai. 
  Santykis skaičiuojamas atsitiktinai, bet taip, kad skaičiai sudarytų didesnę dalį nei masyvai. 
  Reikšmių masyvų ilgis nuo 1 iki 5, o reikšmės analogiškos (nuo 50% iki 100% atsitiktiniai skaičiai 0-100, o likusios masyvai) 
  ir t.t. kol visos galutinės reikšmės bus skaičiai ne masyvai. Suskaičiuoti kiek elementų turi masyvas. 
    Suskaičiuoti masyvo elementų (tie kurie ne masyvai) sumą. Suskaičiuoti maksimalų masyvo gylį. Atvaizduokite masyvą grafiškai . 
    Masyvą pavazduokite kaip div elementą, kuris yra display:flex, kurio viduje yra skaičiai. 
    Kiekvienas div elementas turi savo unikalų id ir unikalią background spalvą (spalva pvz nepavaizduota). 
      pvz: 
          <div id=”M1”>10, 46, 67, <div id=”M2”> 89, 45, 89, 34, 90, <div id=”M3”> 84, 97 </div> 90, 56 </div> </div>
*/


