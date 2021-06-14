/*Напишите ф-цию, в которую передается массив с целыми числами. 
Верните новый массив, где останутся лежать только четные из этих чисел. 
Для этого используйте вспомогательную функцию isEven из предыдущей 
задачи.*/

let arrTask6 = [1,2,3,4,5,6,7];

function task6(someArray){
    arrEven = [];
    for(let i = 0; i < someArray.length; i++){
        if(isEven(someArray[i]) == true){
            arrEven.push(someArray[i]);
        }else continue;
    }
    console.log(arrEven);
    //return arrEven;
}
task6(arrTask6);
//console.log(task6(arrTask6));