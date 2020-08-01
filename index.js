const QUIZ = {
    questions: [
        {
            text: "Which bands lead singer is Laura Jane Grace?", 
            answers: [
                {
                    text: "The Lawrence Arms"
                    
                }, 
                {
                    text: "Off With Their Heads"
                },
                {
                    text: "Against Me!",
                    isCorrect: true
                },
                {
                    text: "Alkaline Trio"
                },

            ]
        },
        {
            text: "From which band did the lead singer/guitarist replace Tom Delonge from blink-182 in 2015?", 
            answers: [
                {
                    text: "Alkaline Trio",
                    isCorrect: true
                }, 
                {
                    text: "Fall Out Boy"
                },
                {
                    text: "Angels & Airwaves"
                },
                {
                    text: "Jimmy Eat World"
                },

            ]
        },
        {
            text: "Which group of bands is considered Ska-Punk?", 
            answers: [
                {
                    text: "Dead Kennedys, Black Flag, Fugazi"
                    
                }, 
                {
                    text: "Flogging Molly, Dropkick Murphys, The Real McKenzies"
                },
                {
                    text: "Bad Religion, Anti-Flag, Rancid"
                },
                {
                    text: "Reel Big Fish, Less Than Jake, Big D and The Kids Table",
                    isCorrect: true
                },

            ]
        },
        {
            text: "Which band released a Christmas album in 2013 titled Christmas Songs?", 
            answers: [
                {
                    text: "Rancid"
                    
                }, 
                {
                    text: "Bad Religion",
                    isCorrect: true
                },
                {
                    text: "NOFX"
                },
                {
                    text: "Off With Their Heads"
                },

            ]
        },
        {
            text: "Which punk band formed in 1974 is cited as the first true punk rock band?", 
            answers: [
                {
                    text: "Black Flag"
                    
                }, 
                {
                    text: "The Clash"
                },
                {
                    text: "Dead Kennedys"
                },
                {
                    text: "Ramones",
                    isCorrect: true
                },

            ]
        },
        {
            text: "What band did Iggy Pop, who is designated as the Godfather of Punk, front?", 
            answers: [
                {
                    text: "The Stooges",
                    isCorrect: true
                }, 
                {
                    text: "Sex Pistols"
                },
                {
                    text: "The Clash"
                },
                {
                    text: "New Youk Dolls"
                },

            ]
        },
        {
            text: "Which band released the album My Shame Is True in 2013?", 
            answers: [
                {
                    text: "NOFX"
                    
                }, 
                {
                    text: "Alkaline Trio",
                    isCorrect: true
                },
                {
                    text: "Anti-Flag"
                },
                {
                    text: "Reel Big Fish"
                },

            ]
        },
        {
            text: "Which sub-genre of punk has such bands as The Wonder Years, The Story So Far, New Found Glory, and Such Gold?", 
            answers: [
                {
                    text: "Crust Punk"
                    
                }, 
                {
                    text: "Ska Punk"
                },
                {
                    text: "Hardcore Punk"
                },
                {
                    text: "Pop Punk",
                    isCorrect: true
                },

            ]
        },
        {
            text: "Which band put out an album that later turned into a broadway musical?", 
            answers: [
                {
                    text: "Green Day",
                    isCorrect: true
                }, 
                {
                    text: "blink-182"
                },
                {
                    text: "Sum 41"
                },
                {
                    text: "Ramones"
                },

            ]
        },
        {
            text: "Which band was not a part of the first Vans Warped Tour, which was held in 1996?", 
            answers: [
                {
                    text: "NOFX",
                    
                }, 
                {
                    text: "Reel Big Fish"
                },
                {
                    text: "Pennywise"
                },
                {
                    text: "Anti-Flag",
                    isCorrect: true
                },

            ]
        }
    ], 
    answers: []
}
//helper functions

function getCurrentQuestionIndex(quiz=QUIZ) {
    return quiz.answers.length

}

function getCurrentQuestionNumber(quiz=QUIZ) {
    return getCurrentQuestionIndex(quiz) + 1 
}

function getQuestionCount(quiz=QUIZ) {
    return quiz.questions.length
}

function getCurrentQuestion(quiz=QUIZ) {
   return quiz.questions[getCurrentQuestionIndex(quiz)]
}

function getScore(quiz=QUIZ) {
    return quiz.answers.filter(answer => answer.isCorrect).length

}

function resetQuiz(quiz=QUIZ) {
    quiz.answers = []
}

function amIDone(quiz=QUIZ) {
    return quiz.questions.length <= quiz.answers.length
}


//generator functions 

function generateScore(quiz=QUIZ) {

}

function generateStartPage() {

}

function generateQuestionPage(question=getCurrentQuestion()) {

}

function generateFeedbackPage(question, answer) {

}

function generateScorePage() {

}



// display functions
function displayStartPage() {

}

function displayQuestionPage(question=getCurrentQuestion()) {

}

function displayFeedbackPage(question, answer) {

}

function displayScorePage() {

}

//event handlers

function handleStartButton() {

}

function handleSubmitQuestion() {

}

function handleNextButton() {

}

function handleRestartButton() {

}




function setUpEventHandlers() {
    handleStartButton();
    handleSubmitQuestion();
    handleNextButton();
    handleRestartButton();


}

function setUpUI() {
    setUpEventHandlers();
    displayStartPage();

}
$(setUpUI)
