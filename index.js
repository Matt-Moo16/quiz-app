const QUIZ = {
    questions: [
        {
            text: 'Which bands lead singer is Laura Jane Grace?', 
            answers: [
                {
                    text: 'The Lawrence Arms'
                    
                }, 
                {
                    text: 'Off With Their Heads'
                },
                {
                    text: 'Against Me!',
                    isCorrect: true
                },
                {
                    text: 'Alkaline Trio'
                },

            ]
        },
        {
            text: 'From which band did the lead singer/guitarist replace Tom Delonge in blink-182 in 2015?', 
            answers: [
                {
                    text: 'Alkaline Trio',
                    isCorrect: true
                }, 
                {
                    text: 'Fall Out Boy'
                },
                {
                    text: 'Angels & Airwaves'
                },
                {
                    text: 'Jimmy Eat World'
                },

            ]
        },
        {
            text: 'Which group of bands is considered Ska-Punk?', 
            answers: [
                {
                    text: 'Dead Kennedys, Black Flag, Fugazi'
                    
                }, 
                {
                    text: 'Flogging Molly, Dropkick Murphys, The Real McKenzies'
                },
                {
                    text: 'Bad Religion, Anti-Flag, Rancid'
                },
                {
                    text: 'Reel Big Fish, Less Than Jake, Big D and The Kids Table',
                    isCorrect: true
                },

            ]
        },
        {
            text: 'Which band released a Christmas album in 2013 titled Christmas Songs?', 
            answers: [
                {
                    text: 'Rancid'
                    
                }, 
                {
                    text: 'Bad Religion',
                    isCorrect: true
                },
                {
                    text: 'NOFX'
                },
                {
                    text: 'Off With Their Heads'
                },

            ]
        },
        {
            text: 'Which punk band formed in 1974 is cited as the first true punk rock band?', 
            answers: [
                {
                    text: 'Black Flag'
                    
                }, 
                {
                    text: 'The Clash'
                },
                {
                    text: 'Dead Kennedys'
                },
                {
                    text: 'Ramones',
                    isCorrect: true
                },

            ]
        },
        {
            text: 'What band did Iggy Pop, who is designated as the Godfather of Punk, front?', 
            answers: [
                {
                    text: 'The Stooges',
                    isCorrect: true
                }, 
                {
                    text: 'Sex Pistols'
                },
                {
                    text: 'The Clash'
                },
                {
                    text: 'New York Dolls'
                },

            ]
        },
        {
            text: 'Which band released the album My Shame Is True in 2013?', 
            answers: [
                {
                    text: 'NOFX'
                    
                }, 
                {
                    text: 'Alkaline Trio',
                    isCorrect: true
                },
                {
                    text: 'Anti-Flag'
                },
                {
                    text: 'Reel Big Fish'
                },

            ]
        },
        {
            text: 'Which sub-genre of punk has such bands as The Wonder Years, The Story So Far, New Found Glory, and Such Gold?', 
            answers: [
                {
                    text: 'Crust Punk'
                    
                }, 
                {
                    text: 'Ska Punk'
                },
                {
                    text: 'Hardcore Punk'
                },
                {
                    text: 'Pop Punk',
                    isCorrect: true
                },

            ]
        },
        {
            text: 'Which band put out an album that later turned into a broadway musical?', 
            answers: [
                {
                    text: 'Green Day',
                    isCorrect: true
                }, 
                {
                    text: 'blink-182'
                },
                {
                    text: 'Sum 41'
                },
                {
                    text: 'Ramones'
                },

            ]
        },
        {
            text: 'Which band was not a part of the first Vans Warped Tour, which was held in 1996?', 
            answers: [
                {
                    text: 'NOFX',
                    
                }, 
                {
                    text: 'Reel Big Fish'
                },
                {
                    text: 'Pennywise'
                },
                {
                    text: 'Anti-Flag',
                    isCorrect: true
                },

            ]
        }
    ], 
    answers: [],
    grades: [
        {
        title: 'More Poser Than Punk', 
        text: 'You should use your time listining to more punk, ans some less time on the mohawk!',
        image: {
            src:'images/slc-punk-sad.gif',
            alt:'SLC Punk Sad',
        }
    },
    {
        title: 'You are an Avid Punk', 
        text: 'Good job! You clearly have some punk in you!',
        image: {
            src:'images/slc-punk-rock.gif',
            alt:'SLC Punk Rock!',
        }
    },
    {
        title: 'You are a True Punk', 
        text: 'Punks not dead with knowledge like that!',
        image: {
            src:'images/punks-not-dead.jpeg',
            alt:'Punks Not Dead',
        }
    }
    ]
}
//helper functions

let currentIndex = 0;

function getCurrentQuestionIndex(quiz=QUIZ) {
    return currentIndex;

}

function getCurrentQuestionNumber(quiz=QUIZ) {
    return getCurrentQuestionIndex(quiz) >= 10 ? 10 : getCurrentQuestionIndex(quiz) + 1 
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

function resetIndex() {
    return currentIndex = 0;
}

//generator functions 

function generateStartPage() {
    const startHtml = $(`
    <section class="start-page js-start-page">
    <h2>How Punk Are You?</h2>
    <p>This quiz will test your knowledge of punk history and sub-genres. Try it and see how punk you are!</p>
    <button class="start" type="button" id="start">Start Quiz</button>
</section>
    `);
    return startHtml;
}

function generateScore(quiz=QUIZ) { 
    const scoreHtml = $(`<section class="score" id="js-score">
    <ul class="score">
        <li id="question-num">
            Question Number: ${getCurrentQuestionNumber()}/${getQuestionCount()}
        </li>
        <li id="js-score">
            Score: ${getScore()}/${getQuestionCount()}
        </li>
    </ul>
    </section>`);
    return scoreHtml

}

function generateQuestionPage(question=getCurrentQuestion(QUIZ)) {
    const questionHtml = $(`
    <section class="questions js-questions">
        <div class="center">
            <h2>${question.text}</h2>
            <form>
                <ul class="answer-choices js-answers"></ul>
            </form>
        </div>

        <button type="submit" id="js-submit-button">Submit</button>

    </section>
    `); 
    return questionHtml
}

function generateAnswers(question=getCurrentQuestion(QUIZ)) {
    let generateOptions = question.answers.map((answer, index) =>  $(`
    <li>
        <input type="radio" class="radio" name="answers" value="${index}" tabindex="${index+1}">
        <label for="answer">${answer.text}</label>
    </li>
    `));
    return generateOptions;
}



function generateFeedbackPage(question=getCurrentQuestion(QUIZ)) {
    const isCorrectAnswer = QUIZ.answers[currentIndex].isCorrect;
    const className = isCorrectAnswer ? 'correct' : 'wrong'
    const title = isCorrectAnswer ? 'Congrats! You got the right answer!' : 'Sorry you guessd the wrong answer!'
    const buttonText = amIDone(QUIZ) ?'See Score' : 'Next Question'
    const correctAnswer = question.answers.find(answer => answer.isCorrect).text;
    currentIndex++
    return `
    <section class="feedback">
    <div class="${className}-answer js-${className}-answer">
        <h3>${title}</h3>
        <p>${isCorrectAnswer ? '' : correctAnswer + ' is the correct answer.'}</p> 
        <button type="button" id="next-button" class="next-button js-next-button">${buttonText}</button>

    </div>
    </section>
    `
}

function generateScorePage(quiz=QUIZ) {
    let grade = 0;
    const score = getScore(quiz);
    if (score >= 8) {
        grade++ 
    }
    if (score >= 4) {
        grade++ 
    }
    const {title, text, image:{src, alt}} = quiz.grades[grade]
    const scoreHtml = $(`
            <div class="center">
            <img class="punks-img" src="${src}" alt="${alt}" >
                <h3>${title}</h3>
                <p>${text}</p>
            </div>
            <form class="restart-button" id="js-restart-button">
                <button type="reset">Restart</button>
            </form>
    `)
    return scoreHtml;

}


// display functions
function displayStartPage() {
    $('main').html(generateStartPage());

}

function displayScore(quiz=QUIZ) {
    $('.js-question-and-score').html(generateScore(quiz));


}

function displayAnswers(question=getCurrentQuestion(QUIZ)) {
    $('.js-answers').html(generateAnswers(question));
}

function displayQuestionPage(question=getCurrentQuestion(QUIZ)) {
    $('main').html(generateQuestionPage(question));
    displayScore();
    displayAnswers(question);
    


}

function displayFeedbackPage(question) { 
    $('main').html(generateFeedbackPage(question)); 
    displayScore();

}

function displayScorePage(quiz=QUIZ) {
    $('main').html(generateScorePage(quiz));

}

//event handlers

function handleStartButton() { $('main').on('click', '#start', event => {
    displayQuestionPage();
    if ($('.js-question-and-score').is(':hidden')) {
        $('.js-question-and-score').show();
    }

});

}

function handleSubmitQuestion() { $('main').on('click', '#js-submit-button', event => {
    console.log('button is working')
    const answerValue = $('input[name="answers"]:checked').val()
    const question = getCurrentQuestion(QUIZ)
    const answer = question.answers[answerValue]
    if (!answer) {
        alert("To punk to give it a try? Try again, but with an answer this time! 💀");
        return
    }
    QUIZ.answers.push(answer)
    displayFeedbackPage();
    
});

}

function handleNextButton() { $('main').on('click', '#next-button', event => {
    if (amIDone(QUIZ)) {
        displayScorePage(QUIZ)
    } 
    else {
        displayQuestionPage(getCurrentQuestion(QUIZ));
    }
    
})

}

function handleRestartButton() { $('main').on('click', '#js-restart-button', event => {
    resetQuiz(QUIZ);
    resetIndex();
    displayStartPage();
    $('.js-question-and-score').hide();
    
});
   
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
$(setUpUI())
