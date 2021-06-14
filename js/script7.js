/*Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные 
циклы):*/

let heigth = 9;

function task7(heigth){

    for(let i = 1; i <= heigth; i++){
        for(let j = 1; j <= i; j++){
            document.write(i);
        }
        document.write('<br/>');
    }
}
task7(heigth);