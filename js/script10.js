/*Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
опять сложите его цифры. И так, пока сумма не станет однозначным числом 
(9 и менее). Исп. Рекурсию. */

function sumOfNum(x){
    let sum = 0;
    x = String(x);
    for(let i = 0; i < x.length; i++){
    sum += +x[i];
    }
    if(sum > 9) sumOfNum(sum);
    console.log(sum);  
}
sumOfNum(853);