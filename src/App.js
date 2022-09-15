import React from "react";
import "./index.scss";

const questions = [
  {
    title: "Что такое смарт-контракт?",
    variants: [
      "Изменение данных в блокчейне",
      "Программа которая работает в системе блокчейна",
      "Любой файл, написанный на языке Solidity",
    ],
    correct: 1,
  },
  {
    title: "Как в Solidity определяются переменные?",
    variants: ["Статически", "Наследовательно", "Динамически", "Императивно"],
    correct: 0,
  },
  {
    title: "Выберете ложное утверждение:",
    variants: [
      "Solidity поддерживает библиотеки и пользовательские типы",
      "Код не может быть выполнен если контракт не скомпилирован",
      "Хранение данных в контракте бесплатно",
      "Solidity — объектно-ориентированный язык",
    ],
    correct: 2,
  },
  {
    title: "Какое расширение используют файлы с программным кодом Solidity?",
    variants: [".sd", ".sol", ".sldt", ".sl"],
    correct: 1,
  },
  {
    title: "Какие версии Solidity входят в диапазон: pragma solidity ^0.7.5; ?",
    variants: [
      "от (включительно) 0.7.5 до 0.8.0 (включительно)",
      "от (включительно) 0.7.5 до 0.8.0 (не включительно)",
      "от 0.7.5",
    ],
    correct: 1,
  },
];

function Result({ right }) {
  return (
    <div className="result">
      <img src="./Solidity.png" />
      <h2>
        {(right === questions.length)
          ? (`Поздравляем! Все ${right} из ${questions.length} ответов верны.`)
          : (right === 1)
            ? (`У Вас всего один правильный ответ :(`)
            : (`У Вас ${right} правильных ответa из ${questions.length}`)
        }
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ question, handleClick, complete }) {
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${complete}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => handleClick(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [right, setRight] = React.useState(0);
  const question = questions[step];
  const complete = step * (100 / questions.length);

  console.log(right)
  console.log(questions.length)

  function handleClick(index) {
    setStep(step + 1);

    if (index == question.correct) {
      setRight(right + 1);
    }
  }

  return (
    <div className="App">
      {questions.length !== step ? (
        <Game
          complete={complete}
          question={question}
          handleClick={handleClick}
        />
      ) : (
        <Result right={right} />
      )}
    </div>
  );
}

export default App;
