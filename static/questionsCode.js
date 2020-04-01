"use strict";

const RED = "red";
const GREEN = "green";

const arr = [
    {
        type: RED,
        question: "Как вы себя чувствуете?",
        answers: [
            {content: "Хорошо/нормально", value: 0},
            {content: "Чувствую слабость", value: 1},
            {content: "Заторможенность, трудно поддерживать контакт", value: 3},
        ],
    },
    {
        type: GREEN,
        question: "Сколько вам лет?",
        answers: [
            {content: "< 60", value: 0},
            {content: "> 60", value: 1},
        ],
    },
    {
        type: RED,
        question: "Есть ли у вас насморк?",
        answers: [
            {content: "да", value: 1},
            {content: "нет", value: 0},
        ],
    },
    {
        type: RED,
        question: "Есть ли у вас першение в горле, кашель?",
        answers: [
            {content: "да", value: 1},
            {content: "нет", value: 0},
        ],
    },
    {
        type: RED,
        question: "Есть ли у вас боли в мышцах?",
        answers: [
            {content: "да", value: 1},
            {content: "нет", value: 0},
        ],
    },
    {
        type: GREEN,
        question: "Были ли вы за границей РФ за последние 14 дней?",
        answers: [
            {content: "да", value: 1},
            {content: "нет", value: 0},
        ],
    },
    {
        type: GREEN,
        question: "Встречались ли вы с людьми, недавно приехавшими из-за рубежа, за последние 14 дней?",
        answers: [
            {content: "да", value: 1},
            {content: "нет", value: 0},
            {content: "не знаю", value: 1},
        ],
    },
    {
        type: RED,
        question: "Какая у вас температура?",
        answers: [
            {content: "> 36.0, < 37.1", value: 0},
            {content: "> 37.2, < 38.5", value: 1},
            {content: "> 38.5", value: 2},
            {content: "<= 36.0", value: 2},
        ],
    },
    {
        type: RED,
        question: "Вы дышите так же легко, как обычно? Нет ли чувства заложенности в груди, одышки?",
        answers: [
            {content: "Дышу легко", value: 0},
            {content: "Есть проблемы с дыханием", value: 3},
        ],
    },
    {
        type: GREEN,
        question: "Есть ли у вас сахарный диабет?",
        answers: [
            {content: "да", value: 2},
            {content: "нет", value: 0},
        ],
    },
    {
        type: GREEN,
        question: "Есть ли у вас заболевания сердца (врождённые или приобретённые)?",
        answers: [
            {content: "да", value: 2},
            {content: "нет", value: 0},
        ],
    },
    {
        type: GREEN,
        question: "Есть ли у вас заболевания лёгких (врождённые или приобретённые)?",
        answers: [
            {content: "да", value: 2},
            {content: "нет", value: 0},
        ],
    },
    {
        type: GREEN,
        question: "Если вы курите, то как долго?",
        answers: [
            {content: "> 10 лет", value: 1},
            {content: "< 10 лет", value: 0},
        ],
    },
    {
        type: GREEN,
        question: "Есть ли у вас онкологические заболевания?",
        answers: [
            {content: "да", value: 2},
            {content: "нет", value: 0},
        ],
    },
    {
        type: GREEN,
        question: "Принимаете ли вы иммуносупрессивную терапию, или вам выполнялась трансплантация органов или тканей?",
        answers: [
            {content: "да", value: 2},
            {content: "нет", value: 0},
        ],
    },
    {
        type: GREEN,
        question: "Есть ли у вас другие хронические заболевания?",
        answers: [
            {content: "да", value: 1},
            {content: "нет", value: 0},
        ],
    },
];

