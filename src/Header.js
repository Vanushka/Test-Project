import React, { Component } from 'react' // импортит пакет react для работы JSX синтаксиса.
// Импортируем Component из библиотеки react чтобы использовать его свойства и методы.

class Header extends React.Component { // Создали класс Header, унаследовали его от Component
  render() { // вызываем метод render
    console.log('items', this.props.items) // для вывода в консоли массив объектов
    return( // и в методе render пишем return, который возвратит нам часть кода
      // для того, чтобы return возвращял нам многострочную верстку, обязательно пишем в скобках ()
      <div>
        {this.props.items.map((item, index) => // для того, чтобы мы могли работать в Header
          // нам нужно использовать this.props, для получения доступа к этим данным
          // в map мы указали 2 параметра item и index
          <a href={item.link} key={index}>{item.label}</a> // Ввыводим ссылку, указываем атрибут href(в нем указываем адрес link)
          // label - это то что будет выводится на экране
          // А так же указываем уникальный ключ
        )}
      </div> // В div мы вставляем компонент  для вывода его на экран
    );
  }
}

export default Header; // Экспортируем класс Header для передачи в другой файл.
