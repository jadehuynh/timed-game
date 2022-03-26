HTML

1. Start screen with title, rules, start button, timer
2. Question screen container with question text, buttons, timer, feedback based on answer selected
3. End of game container with final score, form to enter initials, and a submit button
4. High score page
5. build containers, give id's and class names

Javascript

1. Declare varibles to reference DOM elements in your HTML document

    - StartQuizBtn, StartScreenElement, timerElement, highScoreElement
    - QuestionElement, questionTitleElement, answerChoicesElement

2. Create an array of objects that hold all questions -- can store this in a separate JS file

    - Answer choices
    - Question text
    - Correct answer

3. Create a startQuiz() function triggered by the StartQuizButn

    - Hide start screen
    - unhide questions screen
    - Starts timer
    - Grab first question in the array 

4. Create a function to getQuestiong()/renderQuestion()

    - Renders title, choices and buttons

5. Create a function to check if an answer is correct

    - If the answer is correct, proceed to next question
    - If the answer if wrong, decrement the timer and move on to the next question
    - Keep track of score/points
    - Increment index in array of questions to move on

6. Create a function to end the quiz

    - Hide this question element
    - Unhide the End of quiz element
    - Unhide your final score element, form, submit button

7. Create functionality to save high scores to localStorage -- create high scores 