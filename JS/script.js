"use strict";

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

let numberOfFilms = +prompt("How many movies have you watched so far?",'');
if (numberOfFilms < 10){
    alert('you watched a few movies');
} else if ((numberOfFilms>=10) && (numberOfFilms < 30)){
    alert('you watched a lot of movies');
} else if (numberOfFilms>=30) {
    alert('you are movie-lover');
} else {
    alert('Error');
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let lastMovie, movieRank;
for (let i=0; i < 2; i++){
    lastMovie = prompt("Name one of the last movies you've watched?",'');
    movieRank = +prompt("How would you rate that movie?",'');
    if (lastMovie != '' && lastMovie != null && movieRank != '' && movieRank != null && lastMovie.length < 50){
        personalMovieDB.movies[lastMovie] = movieRank;
    } else {
        console.log('error');
        i--; //return 1 cycle back
    }
}
console.log(personalMovieDB);

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