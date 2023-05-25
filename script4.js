const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

var list =  entrepreneurs.filter(function(years) {
    return years.year < 1980 && years.year > 1969
});

//console.log(list)

let list70Id = document.getElementById('list70');

list.forEach(array => {
    console.log(`${array.first}  ${array.last} ${array.year}`)
    list70Id.innerHTML += `${array.first}  ${array.last} ${array.year} <br>`
  });


//2

const namesArray = entrepreneurs.map(entrepreneur =>`${entrepreneur.first} ${entrepreneur.last}`)

let listName = document.getElementById('listName');
listName.innerHTML += namesArray

console.log(namesArray)

//3

let listActualAge = document.getElementById('actualAge');

const currentYear = new Date().getFullYear();
const entrepreneursAges = entrepreneurs.map(entrepreneur => {
  const age = currentYear - entrepreneur.year;
  return listActualAge.innerHTML +=` ${entrepreneur.first} ${entrepreneur.last}  aurait  ${age}  ans aujourd'hui. <br>`;
});

console.log(entrepreneursAges);




//4


let sortName = document.getElementById('sortName');

const trie = entrepreneurs.sort((a, b) => {
    return a.last.localeCompare(b.last);
  });

console.log(trie)

trie.forEach(array => {
    sortName.innerHTML += `${array.first}  ${array.last} ${array.year} <br>`
  });