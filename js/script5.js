/*Сделайте функцию isEven() (even - это четный), которая параметром 
принимает целое число и проверяет: четное оно или нет. Если четное - пусть 
функция возвращает true, если нечетное — false.*/

let somenumber = +prompt('Веедите число для проверки');

function isEven(somenumber){
    //somenumber = +prompt('Веедите число для проверки');
    if(somenumber % 2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(somenumber));