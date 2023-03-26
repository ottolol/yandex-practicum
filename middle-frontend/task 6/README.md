# Задание 6:

Вы устроились разработчиком в автомобильную компанию. Первое задание — починить код, который отвечает за отображение информации о транспорте и цене. Поправьте классы так, чтобы ошибка ```TypeError: Cannot read property 'vendor' of undefined``` больше не отображалась. Вносите изменения только в файл ```task.js```.

[Ссылка на урок](https://practicum.yandex.ru/trainer/middle-frontend/lesson/f4f1504a-11f1-46d3-9a87-7e06668fe67b/task/6bc0674a-4986-4052-98bf-0d3aa740ee0a/)

Решение - [Ссылка на подсказку - stackoverflow](https://stackoverflow.com/questions/38334062/why-do-you-need-to-bind-a-function-in-a-constructor) нужно было привязать каждый метод в конструкторе методом ```bind(this)```.<br>
```this.method = this.method.bind(this);```<br>
```this.getInfo = this.getInfo.bind(this);```