/*Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.*/

function min(a,b){
    if(a < b){
        return a;
    }else {
        return b;
    }   
}

function max(a,b){
    if(a > b){
        return a;
    }else {
        return b;
    }
}
console.log(min(3,5));
console.log(max(3,7));
