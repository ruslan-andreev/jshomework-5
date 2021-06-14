/*Напишите ф-цию, которая рисует равнобедренный треугольник из 
звездочек: */

function task8(height){
    for(let i = 0; i <= height; i++){
        for(let k = 1; k <= heigth - i; k++ ){
            document.write('&ensp;');
        }
        for(let j = 1; j <= i * 2 - 1; j++){
            document.write('*');
        }
        document.write('<br/>');
    }   
}
task8(heigth);
function task8_1(height){
    for(let i = height; i > 0; i--){
        for(let k = 1; k <= heigth - i; k++ ){
            document.write('&ensp;');
        }
        for(let j = 1; j <= i * 2 - 1; j++){
            document.write('*');
        }
        document.write('<br/>');
    }   
}
task8_1(heigth);