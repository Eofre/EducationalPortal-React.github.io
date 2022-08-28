import React from "react";
import "./style.css";

function NewTest() {
  return (
    <section className="new-test">
      <div className="conteiner">
        <div className="new-test__inner">
          <h1 className="new-test__title">Создание теста</h1>
          <div className="new-test__editor">
            <form action="" className="new-test__editor-form">
              <div className="new-test__editor-info">
                <h3 className="new-test__editor-title">Данные теста</h3>
                <p className="new-test__editor-text">Название</p>
                <input
                  type="text"
                  className="new-test__editor-title new-test__editor-input"
                  placeholder="Например: Тест по русскому языку"
                />
                <p className="new-test__editor-text">Описание</p>
                <input
                  type="text"
                  className="new-test__editor-description new-test__editor-input"
                  placeholder="Например: Тест затронет важнейшие темы по морфологии"
                />
              </div>
              <div className="new-test__editor-questions">
                <h3>Вопросы</h3>
                <div className="new-test__editor-question">
                  <h4 className="new-test__editor-question-title">Вопрос</h4>
                  <p>Текст вопроса</p>
                  <input
                    className="new-test__editor-question-input new-test__editor-input"
                    type="text"
                    placeholder="Например: Сколько будет 2+6?"
                  />
                  <p>Текст ответа</p>
                  <input
                    className="new-test__editor-question-input new-test__editor-input"
                    type="text"
                    placeholder="Например: 3"
                  />
                  <p>Текст ответа</p>
                  <input
                    className="new-test__editor-question-input new-test__editor-input"
                    type="text"
                    placeholder="Например: 2"
                  />
                  <p>Текст ответа</p>
                  <input
                    className="new-test__editor-question-input new-test__editor-input"
                    type="text"
                    placeholder="Например: 8"
                  />
                  <p>Текст ответа</p>
                  <input
                    className="new-test__editor-question-input new-test__editor-input"
                    type="text"
                    placeholder="Например: 13"
                  />
                </div>
                <button className="new-test__editor-questions-btn">
                  Добавить вопрос
                </button>
              </div>
              <button className="new-test__editor-btn">Создать тест</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewTest;
