
/* Домашка по Lesson 2 */

var login = prompt('Кто пришел?', '');

if (login === 'Админ') {

    var password = prompt('Пароль?', '');
    var result = (password === 'Чёрный Властелин') ? 'Добро пожаловать!' :
                (password === null) ? 'Вход отменён' : 'Пароль неверен';

    alert(result);

} else if (login === null) {
    alert('Вход отменён!');
} else {
    alert('Я вас не знаю.');
}



