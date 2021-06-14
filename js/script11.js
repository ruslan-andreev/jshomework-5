/*Дан массив с числами (передается параметром). Выведите 
последовательно его элементы, используя рекурсию и не используя цикл. */
 
let arrTask11 = [9,5,8,23,44,56,27,39,6];
let i = 0;

function printArr(someArr){
     console.log(someArr[i]);
     i++;
     if(i < someArr.length) printArr(someArr);    
}

printArr(arrTask11);