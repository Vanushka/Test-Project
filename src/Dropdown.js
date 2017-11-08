import React, { Component } from 'react'; // импортит пакет react для работы JSX синтаксиса.
// Импортируем Component из библиотеки react чтобы использовать его свойства и методы.

class Dropdown extends Component { // Создали класс Dropdown, унаследовали его от Component
  render() { // вызываем метод render
    return ( // и в методе render пишем return, который возвратит нам часть кода
      <div>It's dropdown baby</div> // В данном случаем бы будем возвращать div
  );
  }
}

export default Dropdown; // експортируем класс Dropdown для передачи в другой файл.
