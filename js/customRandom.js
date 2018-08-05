
/*Программа, которая принимает значение от пользователя,
 а затем выводит случайное число от 1 до числа, что ввел пользователь.*/

while( !Number(customNumber) ) {
    var customNumber = Number( prompt('Введите Ваше число', '') );
}

var draftResult = ( Math.random() * customNumber ) + 1;

alert( Math.floor(draftResult) );