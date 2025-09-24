let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Albert Einstein",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Nikolar Tesla",
        "right_answer": 3,
    },
    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1,
    },
    {
        "question": "Wie hieß einer der ersten Homecomputer?",
        "answer_1": "D64-a",
        "answer_2": "ATA Lerchon",
        "answer_3": "ZX Spectrum",
        "answer_4": "Lightning Sven",
        "right_answer": 3,
    },
    {
        "question": "Welches ist das älteste Textverarbeitungsprogramm?",
        "answer_1": "Word 1.25",
        "answer_2": "ABC Texter",
        "answer_3": "Textmaster",
        "answer_4": "Wordstar",
        "right_answer": 4,
    },
    {
        "question": "Welchen Prozesser nutzte der erste IBM-PC Modell 5150?",
        "answer_1": "8088",
        "answer_2": "JC 51",
        "answer_3": "88-5150",
        "answer_4": "Intel One",
        "right_answer": 1,
    },
    {
        "question": "Mit welcher Programmiersprache arbeiteten die ersten Homecomputer?",
        "answer_1": "Pascal",
        "answer_2": "CC",
        "answer_3": "COBOL",
        "answer_4": "Basic",
        "right_answer": 4,
    },
];

let correntQuestion = 0;


function init() {
    document.getElementById('all_questions').innerHTML = questions.length;
    showQuestion();
};

function showQuestion() {
    let question = questions[correntQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
};

function answer(selection) {
    let question = questions[correntQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    console.log('The Selection was: ', selection);
    console.log('actuell question is: ', question['question']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort !');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        // "bg-" für background            
        // "parentNode" add die CLASS nicht bei der ID, sondern bei der übergeordneten 
        // BOX, die somit keine ID haben muss (Zugriff über die BOX darunter!) !!!

    } else {
        console.log('Falsche Antwort !');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next_button').disabled = false;
}




