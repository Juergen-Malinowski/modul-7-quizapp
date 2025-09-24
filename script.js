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
let rightQuestions = 0;
let resultPicture = "./img/result.jpg";
let winningPicture = "./img/pokal.png";


function init() {
    document.getElementById('all_questions').innerHTML = questions.length;
    showQuestion();
};

function showQuestion() {
    if (correntQuestion >= questions.length) {  // ALLE FRAGEN beantwortet ?
        // in HTML hat die ID "end_screen" den style="display: none;" ...
        // dieser wird mit der Leerzuweisung .style ='' gelöscht !!!
        document.getElementById('end_screen').style = '';
        // und hier muss "display: none;" hinzugefügt werden ...
        document.getElementById('question_body').style = 'display: none;';
        document.getElementById('all_questions_result').innerHTML = questions.length;
        document.getElementById('right_questions').innerHTML = rightQuestions;

        if (rightQuestions == questions.length) {   // ALLES RICHTIG ... POKAL zeigen !!!
            document.getElementById('title_picture').style = '';
            document.getElementById('title_picture').style = 'display: none;';
            document.getElementById("show_picture").src = winningPicture;
        } else { // MIT FEHLER ... ERGEBNIS zeigen !!!
            document.getElementById('title_picture').style = '';
            document.getElementById('title_picture').style = 'display: none;';
            document.getElementById("show_picture").src = resultPicture;

        }
    } else {   // NÄCHSTE Frage ...
        // PROGRESS-BAR berechnen ... WERT ausgeben, BALKEN-Forschritt vergrößern
        let percent = Math.round((correntQuestion+1) / questions.length * 100);  // "Math.round()" rundet auf GANZ Zahl auf
        console.log('Prozent erreicht: ', percent);
        // let ergebnis = (5 / 7) | 0;   // mit "| 0" SCHNEIDET man alle Nachkommastellen WEG !
        document.getElementById('progress_bar').innerHTML = percent + ' %';
        document.getElementById('progress_bar').style.width = `${percent}%`;

        let question = questions[correntQuestion];
        document.getElementById('question_number').innerHTML = correntQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
};

function answer(selection) {  // ANTWORT wurde ausgelöst ... (selection enthält Antwort-Button)
    let question = questions[correntQuestion];   // ARRAY ... Nr. korrekte Antwort?
    let selectedQuestionNumber = selection.slice(-1);   // die ID bis auf Nr. Button reduzieren
    let idOfRightAnswer = `answer_${question['right_answer']}`;  // ermittelt korrekten Antwort-Button

    if (selectedQuestionNumber == question['right_answer']) {  // WENN gewählter Button = korrekter Button
        document.getElementById(selection).parentNode.classList.add('bg-success');  // gewählter Button wird GRÜN
        // "bg-" für background            
        // "parentNode" add die CLASS nicht bei der ID, sondern bei der übergeordneten 
        // BOX, die somit keine ID haben muss (Zugriff über die BOX darunter!) !!!
        rightQuestions++;    // Zähler richtige Antworten um 1 erhöhen
    } else {   // FALSCHE Antwort ... Buttons einfärben ...
        document.getElementById(selection).parentNode.classList.add('bg-danger');   // gedrückte Taste wird ROT
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');   // richtige Taste wird GRÜN
    }
    document.getElementById('next_button').disabled = false;
    // Button "Nächste Frage" wird aktiviert durch Abschalten "disabled"(voreingestellt in HTML)
}

function nextQuestion() {
    document.getElementById('next_button').disabled = true;
    correntQuestion++;
    // if (correntQuestion < questions.length) {
    //     showQuestion();
    // } else return;
    resetAnswerButtons()
    showQuestion();
}

function resetAnswerButtons() {  // Die Buttons wieder in Normalfarbe anzeigen ...
    // remove ALLER möglich Einfärbungen ...
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    // for (let index = 1; index < 5; index++) {
    //     document.getElementById(`answer_+ ${index}`).parentNode.remove('bg-danger');
    //     document.getElementById(`answer_+ ${index}`).parentNode.remove('bg-success');
    // }
}




