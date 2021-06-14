/*Напишите две функции: первая ф-ция должна возвращать массив с 
числовыми значениями, диапазон которых должен вводиться пользователем 
с клавиатуры; вторая – выводить полученный массив.*/

function arrayget(){
    let a = +prompt('Введите первый параметр'),
        b = +prompt('Ведите второй параметр');
        arraytask4 = [];
    for(let i = a; i <= b; i++){
        arraytask4.push(i);
    }
    return arraytask4;
}

function arrayconsole(){
    //console.log(arraytask4);
    console.log(arrayget());
}

//arrayget();
arrayconsole();
