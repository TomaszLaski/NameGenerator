const fs = require('fs');
const genders = ['M', 'S']
const nameFemale = ['Marta', 'Ania', 'Agnieszka', 'Magda', 'Kasia', 'Zosia','Klaudia', 'Basia', 'Antosia', 'Karolina'];
const nameMale = ['Marcin', 'Marek', 'Tomek', 'Bartek', 'Kuba', 'Wojtek','Adrian', 'Edward', 'Artur', 'Antoni'];
const surname = ['Kowalski', 'Kowalska', 'Nowak', 'Kościuszko', 'Młotek', 'Czerwony','Drabina', 'Panel', 'Einstein', 'Rubik'];
const people = [];
const ages = { min: 20, max: 80 };


const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};


const randNumber = ({ min, max }) => {
    return Math.floor(Math.random() * (max - min + 1 )) + min;
};

for( let i = 0; i < 20; i++ ) {

    const gender = randChoice(genders);
    
    let firstName;

    if (gender === 'M') {
        firstName = randChoice(nameMale);

    } else {
        firstName = randChoice(nameFemale);
    }

    const age = randNumber(ages);

    const personName = firstName+ ' ' +surname[Math.floor(Math.random() * surname.length)];

    const nameWithAge = {personName,  age}

    people.push(nameWithAge);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });