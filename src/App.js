import React, { Component } from 'react' // импортит пакет react и component с помощью деструктуризации
//(т.е. Componen - это одно из значений пакета react, в данном случае class)
import ReactDOM from 'react-dom'  // импортит пакет reactDOM

class App extends React.Component { // Создали класс App, отнаследовали его от Component
  render() { // вызываем метод render
    return( // и в методе render пишем return. Всё что будет записано в return будет отрендерено
      <div>Hello World!</div> // В данном случаем бы будем рендерить div
    );
  }
}

ReactDOM.render ( // Вызываем функцию Render и первым аргументом передаём в неё наш компонент App
  <App />,       // А вторым аргументом мы передаём DOM element в который мы собираемся отрендерить наш компонет App
  document.getElementById('root')
)

// В итоге: Данный код не выполняется браузером, перед этим он транспалится в валидный Java Script
// с помощью Babel, переводя его в ES6 и только потом выполняется браузером.
// Мы создали класс, мы заимпортили необходимые библиотеки, мы описали метод render который выводит нам Hello World в браузере.
