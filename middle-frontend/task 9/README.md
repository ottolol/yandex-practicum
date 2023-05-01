# Задание 9:

Напишите функцию, которая будет возвращать коллекцию DOM-узлов на основании переданного селектора в виде Array (не NodeList).

[Ссылка на урок](https://practicum.yandex.ru/trainer/middle-frontend/lesson/0263d6d9-52ae-400f-8165-51ac94b8ac8a/task/58a74765-d361-437c-bdc4-9a01d00f9e56/)

Решение:<br>
Для получения списка узлов по селектору можно воспользоваться методом ```.querySelectorAll```.<br>
Так как результатом является ```NodeList``` из него нужно сделать ```Array```, например с помощью метода ```Array.from```:
``
return Array.from(document.querySelectorAll(selector));
```
