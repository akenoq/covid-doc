"use strict";

function chooseAnswer(link) {
    const questionIndex = parseInt(link.dataset["questionIndex"]);
    $(`.js-answer[data-question-index="${questionIndex}"]`).each(function() {
        $(this).attr("data-answer-choose-flag", "false");

        // set default style to all ans
        $(this).css("color", "black");
        $(this).css("background", "white");
    });

    link.dataset.answerChooseFlag = "true";

    // set active style to current ans
    link.style.color = "#17a2b8";
    link.style.background = "rgba(192, 223, 255, 0.25)";

    getID("nextBtn").disabled = false;
}

function answersComponent(element, questionIndex) {
    let answersString = ``;
    element.answers.forEach((answer) => {
        answersString += `<span 
                            onclick="chooseAnswer(this)"
                            class="answer-class js-answer"
                            data-answer-choose-flag="false"
                            data-question-index="${questionIndex}"
                            data-answer-value="${answer.value}">
                                ${answer.content}
                          </span>
                          <br>`;
    });
    return answersString;
}

function questionComponent(element, answersString, index) {
    return `   
        <div hidden class="card-question-wrap" id="questionCard_${index}">          
            <div class="card card-question">
              <div class="card-header">           
                <b>
                    Вопрос
                    ${index + 1} из ${arr.length}
                </b>
              </div>
              <div class="card-body">
                <h5 class="card-title question-text">${element.question}</h5>
                <p class="card-text">
                    ${answersString}
                </p>               
              </div>
            </div>
        </div>
    `;
}

function getID(id) {
    return document.getElementById(id);
}

window.onload = function () {
    // render all questions
    let contentString = "";
    getID("boxOfQuestions").innerHTML = "";
    arr.forEach((element, index) => {
        const answersString = answersComponent(element, index);
        const questionString = questionComponent(element, answersString, index);
        contentString += questionString.toString();
    });
    getID("boxOfQuestions").innerHTML = contentString + "";

    // make next btn visible
    getID("nextBtn").hidden = false;

    // disable next btn
    getID("nextBtn").disabled = true;

    // zero question is visible
    getID("questionCard_0").hidden = false;

    // current question index
    let questionNumber = 0;

    // btn click event
    getID("nextBtn").onclick = function () {
        getID("nextBtn").disabled = true;
        getID(`questionCard_${questionNumber}`).hidden = true;
        questionNumber++;
        if(questionNumber < arr.length) {
            getID(`questionCard_${questionNumber}`).hidden = false;
        } else {
            getID("processBox").hidden = true;
            getID("resultBox").hidden = false;
            let content = "";
            let sumRED = 0;
            let sumGREEN = 0;
            arr.forEach((element, questionIndex) => {
                const questionText = element.question;
                const $elem = $(`.js-answer[data-question-index="${questionIndex}"][data-answer-choose-flag="true"]`);
                const questionAnswer = $elem.text();
                const pointValue = $elem.attr("data-answer-value");
                if(element.type === RED) sumRED += parseInt(pointValue);
                if(element.type === GREEN) sumGREEN += parseInt(pointValue);
                console.log(`Color: ${element.type}  Index: ${questionIndex}  Value: ${pointValue}`);
                content += `<p>
                        <b>Номер вопроса: </b> ${questionIndex + 1}
                        <br>
                        <b>Вопрос: </b> ${questionText}
                        <br>
                        <b>Ответ: </b> ${questionAnswer}
                        <br>
                        <br>
                    </p>
                `;
            });
            getID("resultBox").innerHTML = `
                <div class="alert alert-light" role="alert">
                    <h4 class="alert-heading">Ваши ответы</h4>
                    ${content}
                </div>
            `;
            console.log("Sum RED: " + sumRED);
            console.log("Sum GREEN: " + sumGREEN);
            // result
            const d = getDiagnosis(sumRED, sumGREEN);
            const r = getRisks(sumRED, sumGREEN);
            let result = "";
            if(d) result += ("<strong> Ваши действия: </strong>" + d + "<br>");
            if(r) result += ("<strong> Ваши риски: </strong>" + r + "<br>");
            getID("resultBox").innerHTML = `
                <div class="alert alert-info" role="alert">
                  <h4 class="alert-heading">Результат</h4>
                  <p>${result}</p>
                </div>
            ` + getID("resultBox").innerHTML;
        }
    }
};

