import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Emblem_of_the_Ministry_of_Defence_of_Ukraine.svg/1024px-Emblem_of_the_Ministry_of_Defence_of_Ukraine.svg.png" className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="http://www.mil.gov.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Шановнi вiйськовослужбовцi Комендатури Мiнiстерства оборони УКРАЇНИ
          </a>
          <h3>
            Вітаю вас з Днем захисника України.
            Бажаю вам довголіття, міцного здоров'я,
            щастя, родинного благополуччя.
            Нехай щастить вам на всіх перехрестях долі!!!
          </h3>
          <div className="ps">
            PS: З повагою, Vitalii Parshin....
          </div>
        </header>
      </div>
    );
  }
}

export default App;
