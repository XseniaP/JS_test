"use strict";

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//
// function availableCurr(arr, missingCurr) {
//     // console.log(typeof(missingCurr));
//     if (arr === 'null' || arr === 'undefined' || arr.length === 0) {
//         console.log('Нет доступных валют');
//         return ('Нет доступных валют');
//     }
//     let intersection = [];
//     if (typeof(missingCurr)==='string' && missingCurr!='null' && missingCurr!='undefined'){
//         missingCurr = [missingCurr];
//     } else if (typeof (missingCurr)==='object') {
//
//     } else if (missingCurr!='null' || missingCurr!='undefined'){
//         missingCurr = [];
//     }
//         // console.log(missingCurr);
//     for (let i of arr){
//         if (missingCurr.includes(i)){
//             continue;
//         } else {
//             intersection.push(i);
//         }
//     }
//     // console.log(intersection);
//     // return(intersection);
//     let line = `Доступные валюты:\n`;
//     for (let i=0; i<intersection.length;i++){
//         line += `${intersection[i]}\n`
//     }
//     console.log(line);
//     return(line);
// }
//
// availableCurr([] , ['CNY']);

// const someString = 'This is some strange string';

// function reverse(str) {
//     let line =``;
//     for (let i=str.length-1; i>=0;i--){
//         line += str[i];
//     }
//     console.log(line);
//     return(line);
// }
// reverse(someString);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
//
// function showFamily(arr) {
//     if (arr.length === 0){
//         console.log('Семья пуста');
//         return('Семья пуста');
//     } else {
//         let list = family.join(' ');
//         console.log(`Семья состоит из: ${list}`);
//         return(`Семья состоит из: ${list}`);
//     }
//
// }
//
// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
//
// function standardizeStrings(arr) {
//     let line = arr.join('\n').toLowerCase();
//     console.log(line);
//     return(line);
// }
//
// standardizeStrings(favoriteCities);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '30%'
//         },
//         exp: '1 month'
//     }
// };
//
// function showExperience(plan) {
//     console.log(plan.skills.exp);
//     return plan.skills.exp;
// }
//
// function showProgrammingLangs(plan) {
//     let str = '';
//     let arr1 = Object.keys(plan.skills.programmingLangs);
//     let arr2 = Object.values(plan.skills.programmingLangs);
//
//     for (let i=0; i<arr1.length; i++){
//         str += `Язык ${arr1[i]} изучен на ${arr2[i]}\n`
//     }
//     console.log(str);
//     return(str);
// }
//
// showProgrammingLangs(personalPlanPeter);

// personalPlanPeter.showAgeAndLangs = function(plan){
//     const arr = plan.skills.languages.slice();
//     let line = arr.join(' ').toUpperCase();
//     console.log(`Мне ${plan.age} и я владею языками: ${line}`);
//     return (`Мне ${plan.age} и я владею языками: ${line}`);
// }

// personalPlanPeter.showAgeAndLangs({
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '30%'
//         },
//         exp: '1 month'
//     }});

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};
// console.log(newObj);

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num = [2, 5, 7];
//
// log(...num);

// const array = ["a", "b"];
// const newArray = [...array];


// const obj = {
//     a:5,
//     b:1
// };

// const copy = obj;
// copy.a = 10;
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
//
// const newNumbers = copy(numbers);
//
// newNumbers.a = 10;
//
// console.log(newNumbers);
// console.log(numbers);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
//
// newArray[1] = 'afabfbfgb';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'facebook', 'instagram'];
// console.log(internet);


// let arr = [1,2,3,4,5];

// const str = prompt("","");
// const products = str.split(", ");
// console.log(products);
// let line = products.join(';');
// console.log(line);

// const arr = [2,13,26,8,10];
// arr.sort(compareNum);
// console.log(arr);
//
// function compareNum(a, b) {
//     return a - b;
// }


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item,i, arr){
//    console.log(`${i}: ${item} inside of array ${arr}`);
// });



// const obj = new Object();

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// const {border, bg} = options.colors;
// console.log(bg);

// options.makeTest();

// console.log(options.name);

// delete options.name;

// console.log(options);

// console.log(Object.keys(options).length)
// for (let key in options) {
//     if (typeof options[key] === 'object') {
//         for (let i in options[key]) {
//             console.log(`property ${i} has the following value: ${options[key][i]} `)
//         }
//     } else {
//     console.log(`property ${key} has the following value: ${options[key]} `)
//     }
// }

// let numberOfFilms;
//
// function start() {
//     // numberOfFilms = +prompt("How many movies have you watched so far?",'');
//
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("How many movies have you watched so far?",'');
//     }
// }
//
// start();
//
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
// function rememberMyFilms() {
//     let lastMovie, movieRank;
//     for (let i=0; i < 2; i++){
//         lastMovie = prompt("Name one of the last movies you've watched?",'').trim();
//         movieRank = +prompt("How would you rate that movie?",'');
//         if (lastMovie != '' && lastMovie != null && movieRank != '' && movieRank != null && lastMovie.length < 50){
//             personalMovieDB.movies[lastMovie] = movieRank;
//         } else {
//             console.log('error');
//             i--; //return 1 cycle back
//         }
//     }
// }
//
// rememberMyFilms();
//
// function detectPersonalLevel(){
//     if (numberOfFilms < 10){
//         alert('you watched a few movies');
//     } else if ((numberOfFilms>=10) && (numberOfFilms < 30)){
//         alert('you watched a lot of movies');
//     } else if (numberOfFilms>=30) {
//         alert('you are movie-lover');
//     } else {
//         alert('Error');
//     }
// }
//
// detectPersonalLevel();
//
// function showMyDB() {
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB);
//     }
// }
//
// showMyDB();
//
// function writeYourGenres() {
//     let genre;
//     for (let i=1; i<4; i++) {
//         genre ='';
//         while (genre === '' || genre == null){
//             genre = prompt(`what is your favourite genre of films #${i}?`);
//         }
//         // personalMovieDB.genres.push(genre);
//         personalMovieDB.genres[i-1] = genre;
//     }
// }
//
// writeYourGenres();


// function first() {
//     setTimeout(function (){
//         console.log(1);
//     }, 500);
// }
//
// function second() {
//     console.log(2);
// }
//
// first();
// second();
// function learnJS(lang, callback) {
//     console.log(`I learn ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function () {
//     console.log('I completed this lesson!');
// });

// function done() {
//     console.log('I completed this lesson!');
// }
// learnJS('JavaScript', done);


// Место для первой задачи
// function calculateVolumeAndArea(side){
//     let cubeVolume, cubeArea;
//     if(Number.isInteger(side) && side > 0){
//         cubeVolume = Math.pow(side,3);
//         cubeArea = 6*Math.pow(side,2);
//         // console.log(`Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`);
//         return (`Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`);
//     } else {
//         // console.log('При вычислении произошла ошибка');
//         return ('При вычислении произошла ошибка');
//     }
// }

// Место для второй задачи
// function getCoupeNumber(num){
//     let coupeNum;
//     if(Number.isInteger(num) && num > 0 && num < 37){
//         coupeNum = Math.ceil(num/4);
//         return(coupeNum);
//     } else if ( num === 0 || num > 36) {
//         return("Таких мест в вагоне не существует");
//     } else {
//         return("Ошибка. Проверьте правильность введенного номера места");
//     }
// }

// function getTimeFromMinutes(minTot) {
//     let hours, minRemainder, answer;
//     if(Number.isInteger(minTot) && minTot >= 0 && minTot <= 600){
//         hours = Math.floor(minTot/60);
//         minRemainder = minTot % 60;
//         if (hours === 0 || hours >= 5) {
//             answer = `Это ${hours} часов и ${minRemainder} минут`
//         } else if (hours === 1){
//             answer = `Это ${hours} час и ${minRemainder} минут`
//         } else {
//             answer = `Это ${hours} часа и ${minRemainder} минут`
//         }
//         console.log(answer);
//     } else {
//         answer = 'Ошибка, проверьте данные';
//         console.log(answer);
//     }
//     return (answer);
// }

// getTimeFromMinutes(-150);

// function findMaxNumber() {
//     if (arguments.length < 4){
//         console.log(0);
//         return 0;
//     }
//     let max = 0;
//     for (let i = 0; i < 4; i++){
//         if (typeof(arguments[i]) != 'number'){
//             console.log(0);
//             return 0;
//         } else if (arguments[i] > max){
//             max = arguments[i];
//         }
//     }
//     console.log(max);
//     return max;
// }
//
// findMaxNumber(1, 5, 6.6, 11);


// function fib(num) {
//     let prevOne = 0, prevTwo = 1;
//     if (num === 1){
//         console.log("0");
//         return "0";
//     } else if (num === 2){
//         console.log("0 1");
//         return "0 1";
//     } else if(num === 0 || typeof(num) != 'number' || !Number.isInteger(num)) {
//         console.log("");
//         return "";
//     } else {
//         let answer = '0 1', temp;
//         for (let i = 3; i <= num; i++) {
//             temp = prevTwo;
//             prevTwo = prevOne + prevTwo;
//             prevOne = temp;
//             answer += ` ${prevTwo}`;
//         }
//         console.log(answer);
//         return answer;
//     }
// }
//
// fib(4.2);

// console.dir(Number);
// let str = 'scoop';
// let upStr = str.toUpperCase();
// console.log(upStr.slice(-3,));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));

// const test = "12.2px";
// console.log(parseFloat(test));
// let str2 = 'map';
// console.log(str.concat(str2));
// function getMathResult(base, num) {
//     let result = `${base}`;
//     if (typeof(num)==='number' && (num > 0)) {
//         for (let i = 2; i <= num; i++){
//             result = result + '---' + base*i;
//         }
//     } else {
//         return base;
//     }
//     return result;
// }

// console.log(getMathResult(3,4));
// function showFirstMessage(){
//     console.log('Hello World')
// }
//
// showFirstMessage();

// const logger = function(){
//     console.log('Hello')
// };
//
// logger();

// const calc = (a,b) => a + b;
// const calc = (a,b) => { return a + b};

// const calc = (a,b) => {
//     console.log('1');
//     return a+b;
// };

// const lines = 5;
// let result = '';
// let space = " ";
// let star = "*";
//
// for (let i = 1, row = lines; i < 12; i+=2, row--){
//     result = result + space.repeat(row) + star.repeat(i) + "\n";
// }
// console.log(result);

// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// let space = ' ';
// let star = '*';
//
// for (let i = 1, row = 4; i < 10; i+=2, row--){
//     result += row*space + star*i + "\n";
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//
// // Пишем решение вот тут
// for (let i = 0; i < data.length; i++) {
//     if (typeof (data[i]) === "string") {
//         data[i] += " - done";
//     } else if (typeof (data[i]) === "number") {
//         data[i] = data[i] * 2;
//     }
// }
// console.log(data);



// let num = 50;

// for (let i=5; i<11; i++){
//     console.log(i);
// }

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }






// console.log(0 || 0 || null);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
//

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets){
//     console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);
//     console.log('everyone is happy');
// } else {
//     console.log(' we are leaving')
// }
// const num = 50;
// (num == 50) ? console.log('ok!') : console.log('Error');

// switch (num) {
//     case 49:
//         console.log('wrong');
//         break;
//     case 100:
//         console.log('wrong');
//         break;
//     case 50:
//         console.log('true');
//         break;
//     default:
//         console.log('not this time');
//         break;
// }

// if (4 == 4) {
//     console.log('ok!');
// } else {
//     console.log('Error');
// }
//
// if (1) {
//     console.log('ok!');
// } else if (1) {
//     console.log('Error');
// } else {
//         console.log('Error');
// }
// alert('Hello');

//works
// let number = 5

// const leftBorderWidth = 1;
// const COLOR_RED = '#F00';
// const _apiBase = 'https://gateway.marvel.com:443/v1/public/';

// let userName = "John";
// let userNumber = 25;
// userNumber = 24;
// const obj = {
//     a: 50
// };

// obj.a = 10;

// number = 10;
// console.log(number);

// let number = 4.6;

// console.log('string'*9);

// const bool = true;

// console.log(something);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
//
// console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['plum.png', 6, 'apple.bmp'];
// console.log(arr[2]);
// console.log(arr['plum.png']);

// let arr = ['a', 'b', 'c'];
// console.log(arr[1]);
// let obj = {0: 'a', 1: 'b', 2: 'c'};
// console.log(obj[1]);
// obj.d = '1234';
// console.log(obj['d']);

// const results = confirm('Are you here?');
// console.log(results);
// console.log(typeof(results));

// const answer = +prompt("are you 18?","18");
// console.log(answer);

// const answers = [];
// answers[0] = prompt('what is your given name?', '')
// answers[1] = prompt('what is your family name?', '')
// answers[2] = prompt('what is your age?', '')
// document.write(answers);

// console.log(typeof(answers));

// const category = 'toys';
// console.log(`https://someurl.com/${category}`);

// const user = 'Ivan';
// alert(`Hi, ${user}`);

// let incr = 10,
//     decr = 10;
//
// incr++;
// decr--;
//
// ++incr;
// --decr;

// const isChecked = true,
//     isClosed = false;
// console.log(isChecked || isClosed);