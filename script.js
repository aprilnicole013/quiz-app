const quizData = [
    {
        question: 'Question #1: Who invented JavaScript?',
        a: 'Brendan Eich',
        b: 'Guido van Rossum',
        c: 'Rasmus Lerdorf',
        d: 'Bjarne Stroustrup',
        correct: 'a',
        explanation: 'Netscape programmer Brandan Eich developed this new scripting language in just 10 days. It was originally named Mocha, but quickly became known as LiveScript and, later, JavaScript.'

    },
    {
        question: 'Question #2: Can you pass an anonymous function as an argument to another function?',
        a: '1995',
        b: '1990',
        c: '1994',
        d: '1997',
        correct: 'a',
        explanation: 'JavaScript was developed in 1995.'
    },
    {
        question: 'Question #3: Which of the following type of variable is visible only within a function where it is defined?',
        a: 'global variable',
        b: 'local variable',
        c: 'both of the above',
        d: 'none of the above',
        correct: 'b',
        explanation: 'Local Variables: A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.'
    },
    {
        question: 'Question #4: Which built-in method returns the characters in a string beginning at the specified location?',
        a: 'substr()',
        b: 'getSubstring()',
        c: 'slice()',
        d: 'none of the above',
        correct: 'a',
        explanation: 'substr() method returns the characters in a string beginning at the specified location through the specified number of characters.'
    },
    {
        question: 'Question #5: Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?',
        a: 'charAt()',
        b: 'charCodeAt()',
        c: 'concat()',
        d: 'indexOf()',
        correct: 'b',
        explanation: 'charCodeAt() − Returns a number indicating the Unicode value of the character at the given index.'
    },
    {
        question: 'Question #6: Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?',
        a: 'lastIndexOf()',
        b: 'search()',
        c: 'substr()',
        d: 'indexOf()',
        correct: 'a',
        explanation: 'lastIndexOf() − Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.'
    },
    {
        question: 'Question #7: Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?',
        a: 'toLocaleLowerCase()',
        b: 'toLowerCase()',
        c: 'toString()',
        d: 'substring()',
        correct: 'a',
        explanation: 'toLocaleLowerCase() − Returns the calling string value converted to lower case while respecting the current locale.'
    },
    {
        question: 'Question #8: Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = "size"> tag?',
        a: 'fixed()',
        b: 'fontcolor()',
        c: 'fontsize()',
        d: 'bold()',
        correct: 'c',
        explanation: 'fontsize() − Causes a string to be displayed in the specified size as if it were in a <font size = "size"> tag.'
    },
    {
        question: 'Question #9: Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?',
        a: 'push()',
        b: 'join()',
        c: 'pop()',
        d: 'map()',
        correct: 'd',
        explanation: 'map() − Creates a new array with the results of calling a provided function on every element in this array.'
    },
    {
        question: 'Question #10: Which of the following function of Array object reverses the order of the elements of an array?',
        a: 'reverse()',
        b: 'push()',
        c: 'reduce()',
        d: 'reduceRight()',
        correct: 'a',
        explanation: 'reverse() − Reverses the order of the elements of an array.'
    }
];

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text') 
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    
}

function getSelected(){
    const answerEls = document.querySelectorAll('.answer')

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected()

    console.log(answer)
    
    if(answer){
        currentQuiz ++;
        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            //TODO: show results
            alert('You finished the quiz!')
        }
    }
    

    

    
        
    

    
    
})
