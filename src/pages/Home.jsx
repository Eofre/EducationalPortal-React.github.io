import React, { useState } from "react";
import "./style.css";
import rightArrow from "./img/right-arrow.svg";
import title1 from "./img/title1.png";
import title2 from "./img/title2.png";

import TestCard from "../components/TestCard";
import test1 from "./img/test3.jpg";
import test2 from "./img/test2.jpg";
import article1 from "./img/article1.jpg";
import article2 from "./img/article2.jpg";
import article3 from "./img/article3.jpg";
import ArticleCard from "../components/ArticleCard";

function Home() {
  const [tests, setTests] = useState([
    {
      id: 0,
      title:
        "Сложный тест на знание русского языка, который по силам только тем, кто учился на одни пятерки",
      description:
        "Как давно вы окончили школу? Даже если это было давно, у вас есть все шансы ответить правильно хотя бы на 80% вопросов этого теста. При условии, что вы прилежно учились.",
      img: test1,
      likes: 79,
      questions: [
        {
          question:
            "Какое слово состоит из приставки, корня, суффикса и окончания?",
          answers: ["задумав", "перевал", "прибранный", "задумчив"],
          currectAnswer: 3,
        },
        {
          question: "В каком слове пишется буква О?",
          answers: ["волч_нок", "зач_тка", "упрощ_нный", "размеж_вка"],
          currectAnswer: 0,
        },
        {
          question: "Что обозначают междометия?",
          answers: [
            "признаки действия",
            "признаки",
            "чувства и побуждения к действию, не называя их",
            "действия",
          ],
          currectAnswer: 2,
        },
        {
          question: "Укажите предложения, где есть междометие.",
          answers: [
            "Давай! Забивай",
            "«Кря-кря», — послышалось издалека.",
            "Рябчик засвистел: «Тиу, тиу, ти-уу-ти»",
            "Ура! Я поступил!",
          ],
          currectAnswer: 3,
        },
        {
          question: "У какого слова значение определено неверно?",
          answers: [
            "Ажиотаж - борьба интересов вокруг чего-либо",
            "Неологизм-недавно появившееся слово в словаре",
            "Фамильярный - неуместно развязный, слишком непринужденный",
            "Монолит- крупная цельная каменная глыба",
          ],
          currectAnswer: 0,
        },
        {
          question:
            "Все знают, что кровь красного цвета. Но иногда, иронизируя над кем-либо, говорят, что у него кровь именно такого цвета.",
          answers: ["Синяя", "Голубая", "Чёрная", "Розовая"],
          currectAnswer: 1,
        },
        {
          question:
            "Образуйте, пожалуйста, 1-е лицо единственного числа настоящего времени от глагола гудеть (он гудит, я...)",
          answers: ["Гужу", "Гудю", "Нельзя образовать", "Гужую"],
          currectAnswer: 0,
        },
        {
          question: "В какой стихотворной строке использован перифраз?",
          answers: [
            `"Янтарь в устах его дымился"`,
            `"В больших рукавицах, а сам ноготок"`,
            `"Унылая пора, очей очарованье"`,
            `"Отговорила роща золотая"`,
          ],
          currectAnswer: 2,
        },
        {
          question: "Что такое эвфемизм?",
          answers: [
            `Комплимент`,
            `Бранное выражение`,
            `Перенос названия предмета на основании его сходства с другим предметом`,
            `Смягченный способ замены синонимичного слова (выражения)`,
          ],
          currectAnswer: 3,
        },
      ],
    },
    {
      id: 1,
      title: "Тест на знания произведений Пушкина А.С.",
      description:
        "Тест покажет, насколько хорошо вы знаете произведения Пушкина А.С.",
      img: test2,
      likes: 70,
      questions: [
        {
          question:
            "Какое слово состоит из приставки, корня, суффикса и окончания?",
          answers: ["задумав", "перевал", "прибранный", "задумчив"],
          currectAnswer: 3,
        },
        {
          question: "В каком слове пишется буква О?",
          answers: ["волч_нок", "зач_тка", "упрощ_нный", "размеж_вка"],
          currectAnswer: 0,
        },
        {
          question: "Что обозначают междометия?",
          answers: [
            "признаки действия",
            "признаки",
            "чувства и побуждения к действию, не называя их",
            "действия",
          ],
          currectAnswer: 2,
        },
        {
          question: "Укажите предложения, где есть междометие.",
          answers: [
            "Давай! Забивай",
            "«Кря-кря», — послышалось издалека.",
            "Рябчик засвистел: «Тиу, тиу, ти-уу-ти»",
            "Ура! Я поступил!",
          ],
          currectAnswer: 3,
        },
        {
          question: "У какого слова значение определено неверно?",
          answers: [
            "Ажиотаж - борьба интересов вокруг чего-либо",
            "Неологизм-недавно появившееся слово в словаре",
            "Фамильярный - неуместно развязный, слишком непринужденный",
            "Монолит- крупная цельная каменная глыба",
          ],
          currectAnswer: 0,
        },
        {
          question:
            "Все знают, что кровь красного цвета. Но иногда, иронизируя над кем-либо, говорят, что у него кровь именно такого цвета.",
          answers: ["Синяя", "Голубая", "Чёрная", "Розовая"],
          currectAnswer: 1,
        },
        {
          question:
            "Образуйте, пожалуйста, 1-е лицо единственного числа настоящего времени от глагола гудеть (он гудит, я...)",
          answers: ["Гужу", "Гудю", "Нельзя образовать", "Гужую"],
          currectAnswer: 0,
        },
        {
          question: "В какой стихотворной строке использован перифраз?",
          answers: [
            `"Янтарь в устах его дымился"`,
            `"В больших рукавицах, а сам ноготок"`,
            `"Унылая пора, очей очарованье"`,
            `"Отговорила роща золотая"`,
          ],
          currectAnswer: 2,
        },
        {
          question: "Что такое эвфемизм?",
          answers: [
            `Комплимент`,
            `Бранное выражение`,
            `Перенос названия предмета на основании его сходства с другим предметом`,
            `Смягченный способ замены синонимичного слова (выражения)`,
          ],
          currectAnswer: 3,
        },
      ],
    },
    {
      id: 2,
      title:
        "Сложный тест на знание русского языка, который по силам только тем, кто учился на одни пятерки",
      description:
        "Как давно вы окончили школу? Даже если это было давно, у вас есть все шансы ответить правильно хотя бы на 80% вопросов этого теста. При условии, что вы прилежно учились.",
      img: test1,
      likes: 64,
      questions: [
        {
          question:
            "Какое слово состоит из приставки, корня, суффикса и окончания?",
          answers: ["задумав", "перевал", "прибранный", "задумчив"],
          currectAnswer: 3,
        },
        {
          question: "В каком слове пишется буква О?",
          answers: ["волч_нок", "зач_тка", "упрощ_нный", "размеж_вка"],
          currectAnswer: 0,
        },
        {
          question: "Что обозначают междометия?",
          answers: [
            "признаки действия",
            "признаки",
            "чувства и побуждения к действию, не называя их",
            "действия",
          ],
          currectAnswer: 2,
        },
        {
          question: "Укажите предложения, где есть междометие.",
          answers: [
            "Давай! Забивай",
            "«Кря-кря», — послышалось издалека.",
            "Рябчик засвистел: «Тиу, тиу, ти-уу-ти»",
            "Ура! Я поступил!",
          ],
          currectAnswer: 3,
        },
        {
          question: "У какого слова значение определено неверно?",
          answers: [
            "Ажиотаж - борьба интересов вокруг чего-либо",
            "Неологизм-недавно появившееся слово в словаре",
            "Фамильярный - неуместно развязный, слишком непринужденный",
            "Монолит- крупная цельная каменная глыба",
          ],
          currectAnswer: 0,
        },
        {
          question:
            "Все знают, что кровь красного цвета. Но иногда, иронизируя над кем-либо, говорят, что у него кровь именно такого цвета.",
          answers: ["Синяя", "Голубая", "Чёрная", "Розовая"],
          currectAnswer: 1,
        },
        {
          question:
            "Образуйте, пожалуйста, 1-е лицо единственного числа настоящего времени от глагола гудеть (он гудит, я...)",
          answers: ["Гужу", "Гудю", "Нельзя образовать", "Гужую"],
          currectAnswer: 0,
        },
        {
          question: "В какой стихотворной строке использован перифраз?",
          answers: [
            `"Янтарь в устах его дымился"`,
            `"В больших рукавицах, а сам ноготок"`,
            `"Унылая пора, очей очарованье"`,
            `"Отговорила роща золотая"`,
          ],
          currectAnswer: 2,
        },
        {
          question: "Что такое эвфемизм?",
          answers: [
            `Комплимент`,
            `Бранное выражение`,
            `Перенос названия предмета на основании его сходства с другим предметом`,
            `Смягченный способ замены синонимичного слова (выражения)`,
          ],
          currectAnswer: 3,
        },
      ],
    },
  ]);
  const [articles, setArticles] = useState([
    {
      id: 0,
      img: article1,
      title: "Русский язык и занимательные факты о нем",
      description: "Ты будешь удивлён!",
      likes: 98,
      paragraphs: [
        {
          title: "",
          text: `Считается, что русский язык достаточно сложен и очень многогранен. На нем говорят люди в самых разных странах мира, многие его понимают. На сегодняшний день он занимает 6 место в мире по числу говорящих на нем людей, а что касается количества носителей языка — здесь русский занял почетное 8 место.`,
        },
        {
          title: "",
          text: `Но, говоря по-русски, люди зачастую даже не задумываются о том, на каком удивительном языке они говорят и не знают его истории. Многие из нас не знают о родном языке практически ничего. А между тем, есть очень любопытные факты, на тему которых мы и поговорим в этой статье. Мы уверены, что вы узнаете много нового и интересного.`,
        },
        {
          title: "Факт 1",
          text: `Практически все слова, которые в русском языке начинаются на букву «А», были заимствованы из иностранных языков. Истинно русскими в этом отношении являются всего три слова. А именно «авось», «азбука» и «аз».`,
        },
        {
          title: "Факт 2",
          text: `Всем привычная буква «Х» изначально называлась несколько длиннее, а именно «хер». От названия этой буквы появилось слово «похерить». Смысл в том, что по виду буква напоминает крест, то есть «похерить» значит каким-то образом что-то перечеркнуть. Смысл этого слова неизменен и в наши дни.`,
        },
        {
          title: "Факт 3",
          text: `Немногие знают, что в русском есть 2 слова, в которых подряд целых три гласных — это слова змееед и длинношеее.`,
        },
        {
          title: "Факт 4",
          text: `На Руси и в Российской империи существовало понятие «нелепый глагол». Поскольку устаревшее слово «лепота» означало красоту и правильность чего-либо, то слово «нелепый» означало полную противоположность этому понятию. Слово «лепота» на данный момент почти не используется, а слово «нелепый» осталось и сохранило свой первоначальный смысл.`,
        },
        {
          title: "Факт 5",
          text: `Самое длинное слово в русском языке, которое достаточно часто употребляют его носители — соответственно. В нем целых четырнадцать букв!`,
        },
        {
          title: "Факт 6",
          text: `Носители английского языка, которые решили изучать русский, придумали оригинальную идею, как запомнить по-русски выражение «я люблю вас». Чтобы им было проще его выучить, они перекроили его на свой лад — «yellow blue bus», что в переводе на русский означает желто-голубой автобус.`,
        },
        {
          title: "Факт 7",
          text: `Русский алфавит очень интересный и иностранцам может показаться даже странным. Например, многие буквы сильно напоминают латинские. Но самое забавное, что есть буквы, которые вообще невозможно произнести и как-то обозначить. Трудно также и объяснить их значение. Это Ъ и Ь.`,
        },
        {
          title: "Факт 8",
          text: `Буква «й» сама по себе не вызывает ни у кого удивления, если встречается в середине слова, но вот чтобы слово с нее начиналось — это считается редкостью. Даже носители языка, как правило, в состоянии вспомнить всего пару-тройку таких слов, например, йога или йод. И только единицы в курсе, что слов, начинающихся на «й», в русском языке насчитывается 74 штуки.`,
        },
        {
          title: "Факт 9",
          text: `Еще одна редкая буква — «ы». На нее начинаются некоторые названия географических объектов в России.`,
        },
        {
          title: "Факт 10",
          text: `Еще один занимательный факт — в слове «обороноспособность» целых 7 букв «о»!`,
        },
        {
          title: "Факт 11",
          text: `На сегодняшний день по популярности в сети Интернет русский язык уступает только английскому и занимает 2 место. Всего в мире на нем изъясняется более 260 миллионов людей.`,
        },
        {
          title: "Факт 12",
          text: `Русский язык постоянно меняется. Не только уходят архаизмы, но и появляются новые правила. Например, ранее слово «кофе» употреблялось только в мужском роде, но уже 10 лет его официально можно употреблять и в среднем. Таким образом, у этого слова целых два рода одновременно.`,
        },
        {
          title: "Факт 13",
          text: `Современное слово «баба» считается просторечным и иногда даже оскорбительным, но немногие знают о том, что раньше звание «баба» нужно было еще заслужить. Так называли только тех женщин, которые смогли родить сына. Если у женщины рождались только девочки, то бабой ее не называли вплоть до того момента, пока она не родит мальчика.`,
        },
        {
          title: "Факт 14",
          text: `Еще одно интересное заимствованное слово — хулиган. Оно было заимствовано в английском языке, от фамилии Халиган одного из английских семейств. Свой сегодняшний смысл в русском получило из-за того, что представители английского семейства отличались весьма буйными чертами характера.`,
        },
        {
          title: "Факт 15",
          text: `Долгое время в русском языке не существовало буквы «ё» — вплоть до 1873 года.`,
        },
        {
          title: "Факт 16",
          text: `Первые слова, которые прозвучали в космосе, были произнесены именно на русском языке. Нетрудно догадаться, что произнес их никто иной как Юрий Гагарин.`,
        },
        {
          title: "Факт 17",
          text: `«РЕНТГЕНОЭЛЕКТРОКАРДИОГРАФИЧЕСКОГО» — самое длинное русское слово, состоящее из 33 букв! Оно даже попало в Книгу рекордов Гиннеса.`,
        },
        {
          title: "Факт 18",
          text: `В русском языке много выражений, в которых фигурирует слово рука. Причем они имеют разный смысл. Например, «руки так и чешутся», «идти по жизни рука об руку», «все в твоих руках» и другие.`,
        },
        {
          title: "Факт 19",
          text: `Сегодня первая буква алфавита — это «А», но когда-то первой была «Я» и только потом они поменялись местами.`,
        },
        {
          title: "Факт 20",
          text: `Знак препинания, который мы сегодня знаем как восклицательный знак, когда-то назывался «точкой удивления».`,
        },
      ],
    },
    {
      id: 1,
      img: article2,
      title: "12 способов сделать школьный урок интересным",
      description: "Никаких оговорок: любой урок может стать таким",
      likes: 83,
      paragraphs: [
        {
          title: "",
          text: `Считается, что русский язык достаточно сложен и очень многогранен. На нем говорят люди в самых разных странах мира, многие его понимают. На сегодняшний день он занимает 6 место в мире по числу говорящих на нем людей, а что касается количества носителей языка — здесь русский занял почетное 8 место.`,
        },
        {
          title: "",
          text: `Но, говоря по-русски, люди зачастую даже не задумываются о том, на каком удивительном языке они говорят и не знают его истории. Многие из нас не знают о родном языке практически ничего. А между тем, есть очень любопытные факты, на тему которых мы и поговорим в этой статье. Мы уверены, что вы узнаете много нового и интересного.`,
        },
        {
          title: "Факт 1",
          text: `Практически все слова, которые в русском языке начинаются на букву «А», были заимствованы из иностранных языков. Истинно русскими в этом отношении являются всего три слова. А именно «авось», «азбука» и «аз».`,
        },
        {
          title: "Факт 2",
          text: `Всем привычная буква «Х» изначально называлась несколько длиннее, а именно «хер». От названия этой буквы появилось слово «похерить». Смысл в том, что по виду буква напоминает крест, то есть «похерить» значит каким-то образом что-то перечеркнуть. Смысл этого слова неизменен и в наши дни.`,
        },
        {
          title: "Факт 3",
          text: `Немногие знают, что в русском есть 2 слова, в которых подряд целых три гласных — это слова змееед и длинношеее.`,
        },
        {
          title: "Факт 4",
          text: `На Руси и в Российской империи существовало понятие «нелепый глагол». Поскольку устаревшее слово «лепота» означало красоту и правильность чего-либо, то слово «нелепый» означало полную противоположность этому понятию. Слово «лепота» на данный момент почти не используется, а слово «нелепый» осталось и сохранило свой первоначальный смысл.`,
        },
        {
          title: "Факт 5",
          text: `Самое длинное слово в русском языке, которое достаточно часто употребляют его носители — соответственно. В нем целых четырнадцать букв!`,
        },
        {
          title: "Факт 6",
          text: `Носители английского языка, которые решили изучать русский, придумали оригинальную идею, как запомнить по-русски выражение «я люблю вас». Чтобы им было проще его выучить, они перекроили его на свой лад — «yellow blue bus», что в переводе на русский означает желто-голубой автобус.`,
        },
        {
          title: "Факт 7",
          text: `Русский алфавит очень интересный и иностранцам может показаться даже странным. Например, многие буквы сильно напоминают латинские. Но самое забавное, что есть буквы, которые вообще невозможно произнести и как-то обозначить. Трудно также и объяснить их значение. Это Ъ и Ь.`,
        },
        {
          title: "Факт 8",
          text: `Буква «й» сама по себе не вызывает ни у кого удивления, если встречается в середине слова, но вот чтобы слово с нее начиналось — это считается редкостью. Даже носители языка, как правило, в состоянии вспомнить всего пару-тройку таких слов, например, йога или йод. И только единицы в курсе, что слов, начинающихся на «й», в русском языке насчитывается 74 штуки.`,
        },
        {
          title: "Факт 9",
          text: `Еще одна редкая буква — «ы». На нее начинаются некоторые названия географических объектов в России.`,
        },
        {
          title: "Факт 10",
          text: `Еще один занимательный факт — в слове «обороноспособность» целых 7 букв «о»!`,
        },
        {
          title: "Факт 11",
          text: `На сегодняшний день по популярности в сети Интернет русский язык уступает только английскому и занимает 2 место. Всего в мире на нем изъясняется более 260 миллионов людей.`,
        },
        {
          title: "Факт 12",
          text: `Русский язык постоянно меняется. Не только уходят архаизмы, но и появляются новые правила. Например, ранее слово «кофе» употреблялось только в мужском роде, но уже 10 лет его официально можно употреблять и в среднем. Таким образом, у этого слова целых два рода одновременно.`,
        },
        {
          title: "Факт 13",
          text: `Современное слово «баба» считается просторечным и иногда даже оскорбительным, но немногие знают о том, что раньше звание «баба» нужно было еще заслужить. Так называли только тех женщин, которые смогли родить сына. Если у женщины рождались только девочки, то бабой ее не называли вплоть до того момента, пока она не родит мальчика.`,
        },
        {
          title: "Факт 14",
          text: `Еще одно интересное заимствованное слово — хулиган. Оно было заимствовано в английском языке, от фамилии Халиган одного из английских семейств. Свой сегодняшний смысл в русском получило из-за того, что представители английского семейства отличались весьма буйными чертами характера.`,
        },
        {
          title: "Факт 15",
          text: `Долгое время в русском языке не существовало буквы «ё» — вплоть до 1873 года.`,
        },
        {
          title: "Факт 16",
          text: `Первые слова, которые прозвучали в космосе, были произнесены именно на русском языке. Нетрудно догадаться, что произнес их никто иной как Юрий Гагарин.`,
        },
        {
          title: "Факт 17",
          text: `«РЕНТГЕНОЭЛЕКТРОКАРДИОГРАФИЧЕСКОГО» — самое длинное русское слово, состоящее из 33 букв! Оно даже попало в Книгу рекордов Гиннеса.`,
        },
        {
          title: "Факт 18",
          text: `В русском языке много выражений, в которых фигурирует слово рука. Причем они имеют разный смысл. Например, «руки так и чешутся», «идти по жизни рука об руку», «все в твоих руках» и другие.`,
        },
        {
          title: "Факт 19",
          text: `Сегодня первая буква алфавита — это «А», но когда-то первой была «Я» и только потом они поменялись местами.`,
        },
        {
          title: "Факт 20",
          text: `Знак препинания, который мы сегодня знаем как восклицательный знак, когда-то назывался «точкой удивления».`,
        },
      ],
    },
    {
      id: 2,
      img: article3,
      title: "Почему каждый ребёнок должен уметь программировать",
      description:
        "Автор учебника «Scratch для детей» Дерек Брин — о том, как освоиться в новом цифровом мире",
      likes: 71,
      paragraphs: [
        {
          title: "",
          text: `Считается, что русский язык достаточно сложен и очень многогранен. На нем говорят люди в самых разных странах мира, многие его понимают. На сегодняшний день он занимает 6 место в мире по числу говорящих на нем людей, а что касается количества носителей языка — здесь русский занял почетное 8 место.`,
        },
        {
          title: "",
          text: `Но, говоря по-русски, люди зачастую даже не задумываются о том, на каком удивительном языке они говорят и не знают его истории. Многие из нас не знают о родном языке практически ничего. А между тем, есть очень любопытные факты, на тему которых мы и поговорим в этой статье. Мы уверены, что вы узнаете много нового и интересного.`,
        },
        {
          title: "Факт 1",
          text: `Практически все слова, которые в русском языке начинаются на букву «А», были заимствованы из иностранных языков. Истинно русскими в этом отношении являются всего три слова. А именно «авось», «азбука» и «аз».`,
        },
        {
          title: "Факт 2",
          text: `Всем привычная буква «Х» изначально называлась несколько длиннее, а именно «хер». От названия этой буквы появилось слово «похерить». Смысл в том, что по виду буква напоминает крест, то есть «похерить» значит каким-то образом что-то перечеркнуть. Смысл этого слова неизменен и в наши дни.`,
        },
        {
          title: "Факт 3",
          text: `Немногие знают, что в русском есть 2 слова, в которых подряд целых три гласных — это слова змееед и длинношеее.`,
        },
        {
          title: "Факт 4",
          text: `На Руси и в Российской империи существовало понятие «нелепый глагол». Поскольку устаревшее слово «лепота» означало красоту и правильность чего-либо, то слово «нелепый» означало полную противоположность этому понятию. Слово «лепота» на данный момент почти не используется, а слово «нелепый» осталось и сохранило свой первоначальный смысл.`,
        },
        {
          title: "Факт 5",
          text: `Самое длинное слово в русском языке, которое достаточно часто употребляют его носители — соответственно. В нем целых четырнадцать букв!`,
        },
        {
          title: "Факт 6",
          text: `Носители английского языка, которые решили изучать русский, придумали оригинальную идею, как запомнить по-русски выражение «я люблю вас». Чтобы им было проще его выучить, они перекроили его на свой лад — «yellow blue bus», что в переводе на русский означает желто-голубой автобус.`,
        },
        {
          title: "Факт 7",
          text: `Русский алфавит очень интересный и иностранцам может показаться даже странным. Например, многие буквы сильно напоминают латинские. Но самое забавное, что есть буквы, которые вообще невозможно произнести и как-то обозначить. Трудно также и объяснить их значение. Это Ъ и Ь.`,
        },
        {
          title: "Факт 8",
          text: `Буква «й» сама по себе не вызывает ни у кого удивления, если встречается в середине слова, но вот чтобы слово с нее начиналось — это считается редкостью. Даже носители языка, как правило, в состоянии вспомнить всего пару-тройку таких слов, например, йога или йод. И только единицы в курсе, что слов, начинающихся на «й», в русском языке насчитывается 74 штуки.`,
        },
        {
          title: "Факт 9",
          text: `Еще одна редкая буква — «ы». На нее начинаются некоторые названия географических объектов в России.`,
        },
        {
          title: "Факт 10",
          text: `Еще один занимательный факт — в слове «обороноспособность» целых 7 букв «о»!`,
        },
        {
          title: "Факт 11",
          text: `На сегодняшний день по популярности в сети Интернет русский язык уступает только английскому и занимает 2 место. Всего в мире на нем изъясняется более 260 миллионов людей.`,
        },
        {
          title: "Факт 12",
          text: `Русский язык постоянно меняется. Не только уходят архаизмы, но и появляются новые правила. Например, ранее слово «кофе» употреблялось только в мужском роде, но уже 10 лет его официально можно употреблять и в среднем. Таким образом, у этого слова целых два рода одновременно.`,
        },
        {
          title: "Факт 13",
          text: `Современное слово «баба» считается просторечным и иногда даже оскорбительным, но немногие знают о том, что раньше звание «баба» нужно было еще заслужить. Так называли только тех женщин, которые смогли родить сына. Если у женщины рождались только девочки, то бабой ее не называли вплоть до того момента, пока она не родит мальчика.`,
        },
        {
          title: "Факт 14",
          text: `Еще одно интересное заимствованное слово — хулиган. Оно было заимствовано в английском языке, от фамилии Халиган одного из английских семейств. Свой сегодняшний смысл в русском получило из-за того, что представители английского семейства отличались весьма буйными чертами характера.`,
        },
        {
          title: "Факт 15",
          text: `Долгое время в русском языке не существовало буквы «ё» — вплоть до 1873 года.`,
        },
        {
          title: "Факт 16",
          text: `Первые слова, которые прозвучали в космосе, были произнесены именно на русском языке. Нетрудно догадаться, что произнес их никто иной как Юрий Гагарин.`,
        },
        {
          title: "Факт 17",
          text: `«РЕНТГЕНОЭЛЕКТРОКАРДИОГРАФИЧЕСКОГО» — самое длинное русское слово, состоящее из 33 букв! Оно даже попало в Книгу рекордов Гиннеса.`,
        },
        {
          title: "Факт 18",
          text: `В русском языке много выражений, в которых фигурирует слово рука. Причем они имеют разный смысл. Например, «руки так и чешутся», «идти по жизни рука об руку», «все в твоих руках» и другие.`,
        },
        {
          title: "Факт 19",
          text: `Сегодня первая буква алфавита — это «А», но когда-то первой была «Я» и только потом они поменялись местами.`,
        },
        {
          title: "Факт 20",
          text: `Знак препинания, который мы сегодня знаем как восклицательный знак, когда-то назывался «точкой удивления».`,
        },
      ],
    },
  ]);

  return (
    <section className="home">
      <div className="conteiner">
        <div className="home__inner">
          <div className="home__test">
            <div className="home__title">
              <h2 className="home__title-text">Актуальные тесты</h2>
              <img src={title1} alt="" className="home__title-img" />
            </div>
            <div className="home__tests">
              {tests.map((item) => (
                <TestCard key={item.id} test={item} />
              ))}
            </div>
          </div>
          <div className="home__article">
            <div className="home__title">
              <h2 className="home__title-text">Актуальные статьи</h2>
              <img src={title2} alt="" className="home__title-img" />
            </div>
            <div className="home__articles">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
