import React, { Component } from 'react'; // импортит пакет react для работы JSX синтаксиса.
// Импортируем Component из библиотеки react чтобы использовать его свойства и методы.

class Dropdown extends Component { // Создали класс Dropdown, унаследовали его от Component
  constructor(props) { // Добавили constructor и первым аргументом у него будет props.
    //Конструктор как раз вызывается у подкласса для доступа к this.
    super(props); // super(props) вызывается если нам нужно получить доступ к this.props - к конструктору.
    this.state = { isOpened: false}; // Мы в constructor при инициализации
    // создали новую переменную isOpened в state и поставили её в значении false
  }

  toggleState() { // здесь мы описываем метод toggleState
    this.setState({ isOpened: !this.state.isOpened}); // мы вызываем функцию setState,
    // которая нам будет дуглить в обратную сторону из false в true и наоборот
  }

  render() { // вызываем метод render
    console.log( 'isOpened', this.state.isOpened ); // консолим переменную, чтобы она вызвалась в консоле инструмента разраотчика.
    let dropdownText; // создаём переменную dropdownText
    if (this.state.isOpened) { // Написали if условие которое будет выводить текст в div при нажати, когда state будет isOpened
      dropdownText = <div>Here is what is shown in dropdown</div>
    }
    return ( // и в методе render пишем return, который возвратит нам часть кода
      <div onClick={this.toggleState.bind(this)}>
        It's dropdown baby
        {dropdownText}
      </div> // В div мы добавили onClick событие
      // так же мы не указали функцию this.toggleState в () скобках, чтобы она не запускалась сразу после инициализации
      // так же мы указали функция bind(this) чтобы  функция toggleState вызывалась у нас в контексте класса, иначе будет
      // значение при нажатии undefined
      // И указали переменную dropdownText внутрь div, иначе она не будет работать.
    );
  }
}

export default Dropdown; // Экспортируем класс Dropdown для передачи в другой файл.
