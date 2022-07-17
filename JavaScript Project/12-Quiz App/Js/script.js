
const quiz = document.getElementById("quiz");
const questionTitle = document.getElementById("question-title");
const answerList = document.querySelectorAll(".answer");
const btn = document.getElementById("btn");

const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

let questionCounter = 0;
let score = 0;

const getData = async () => {

    const res = await fetch("/Js/data.json")
    const data = await res.json()
    return data;

}




loadQuiz()


function loadQuiz() {

    deselectAnswers()

    getData()
        .then(data => {

            questionTitle.innerHTML = data[questionCounter].question;

            a_text.innerHTML = data[questionCounter].a;
            b_text.innerHTML = data[questionCounter].b;
            c_text.innerHTML = data[questionCounter].c;
            d_text.innerHTML = data[questionCounter].d;

        })
}

function deselectAnswers() {
    answerList.forEach(answer => {
        answer.checked = false
    })
}

function getSelected() {
    let answer;
    answerList.forEach(answerEl => {


        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer;
}


btn.addEventListener('click', () => {


    let answer = getSelected()


    getData()
        .then(data => {

            if (answer === data[questionCounter].correct) {

                score++;
            }

            questionCounter++;

            if (questionCounter < data.length) {
                loadQuiz()
            }
            else {
                quiz.innerHTML =
                    `
                 <h2 >Skorunuz : ${score}/5</h2>


                 <button onclick="location.reload()">Tekrar Dene</button>

            `
            }


        })



})







