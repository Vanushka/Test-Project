import React, { Component } from 'react' // импортит пакет react для работы JSX синтаксиса.
// Импортируем Component из библиотеки react чтобы использовать его свойства и методы.
import ReactDOM from 'react-dom'  // импортит пакет reactDOM который нам отрисовывает VirtualDOM для сравнения с реальным домом. И отрисовывает внесённые изменения
import Header from './Header' // Импортируем Header из Header.js
import Dropdown from './Dropdown'
const menu = [
  {
    link: '/articles',
    label: 'Articles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  }
] // создали константу menu которая будет массивом объектов

class App extends React.Component { // Создали класс App, унаследовали его от Component
  render() { // вызываем метод render
    return( // и в методе render пишем return, который возвратит нам часть кода
      // для того, чтобы return возвращял нам многострочную верстку, обязательно пишем в скобках ()
      <div>
        <Header items={menu}/>
        <Dropdown />
      </div> // В div мы вставляем компонент Header для вывода его на экран
      // указали атрибуд items и туда передали menu массив (значение в компоненте)
    );
  }
}

ReactDOM.render ( // Вызываем функцию Render и первым аргументом передаём в неё наш компонент App
  <App />,       // А вторым аргументом мы передаём DOM element в который мы собираемся вернуть наш компонет App
  document.getElementById('root')
)
