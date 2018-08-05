
/*Программа, которая принимает два значение от пользователя,
 а затем выводит случайное число от первого до второго числа,
  что ввел пользователь.*/

while( !Number(start) ) {
    var start = Number( prompt('Введите Ваше первое число', '') );
    if (start === 0) {
        break;
    }
}

while( !Number(limit) || (start >= limit) ) {
    var limit = Number( prompt('Введите Ваше второе число', '') );
}

var difference = limit - start;

var draftResult = (Math.random() * difference) + start;

alert( Math.round(draftResult) );
