const quizData = [
    {
        question: 'Question #1: Is JavaScript a case-sensitive language?',
        a: 'yes',
        b: 'no',
        correct: a,
        explanation: 'Yes! JavaScript is a case-sensitive language. This means that language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.'

    },
    {
        question: 'Question #2: Can you pass an anonymous function as an argument to another function?',
        a: 'yes',
        b: 'no',
        correct: a,
        explanation: 'Yes! An anonymous function can be passed as an argument to another function.'
    },
    {
        question: 'Question #3: Which of the following type of variable is visible only within a function where it is defined?',
        a: 'global variable',
        b: 'local variable',
        c: 'both of the above',
        d: 'none of the above',
        correct: b,
        explanation: 'Local Variables: A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.'
    },
    {
        question: 'Question #4: Which built-in method returns the characters in a string beginning at the specified location?',
        a: 'substr()',
        b: 'getSubstring()',
        c: 'slice()',
        d: 'none of the above',
        correct: a,
        explanation: 'substr() method returns the characters in a string beginning at the specified location through the specified number of characters.'
    },
    {
        question: 'Question #5: Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?',
        a: 'charAt()',
        b: 'charCodeAt()',
        c: 'concat()',
        d: 'indexOf()',
        correct: b,
        explanation: 'charCodeAt() − Returns a number indicating the Unicode value of the character at the given index.'
    },
    {
        question: 'Question #6: Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?',
        a: 'lastIndexOf()',
        b: 'search()',
        c: 'substr()',
        d: 'indexOf()',
        correct: a,
        explanation: 'lastIndexOf() − Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.'
    },
    {
        question: 'Question #7: Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?',
        a: 'toLocaleLowerCase()',
        b: 'toLowerCase()',
        c: 'toString()',
        d: 'substring()',
        correct: a,
        explanation: 'toLocaleLowerCase() − Returns the calling string value converted to lower case while respecting the current locale.'
    },
    {
        question: 'Question #8: Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = "size"> tag?',
        a: 'fixed()',
        b: 'fontcolor()',
        c: 'fontsize()',
        d: 'bold()',
        correct: c,
        explanation: 'fontsize() − Causes a string to be displayed in the specified size as if it were in a <font size = "size"> tag.'
    },
    {
        question: 'Question #9: Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?',
        a: 'push()',
        b: 'join()',
        c: 'pop()',
        d: 'map()',
        correct: d,
        explanation: 'map() − Creates a new array with the results of calling a provided function on every element in this array.'
    },
    {
        question: 'Question #10: Which of the following function of Array object reverses the order of the elements of an array?',
        a: 'reverse()',
        b: 'push()',
        c: 'reduce()',
        d: 'reduceRight()',
        correct: a,
        explanation: 'reverse() − Reverses the order of the elements of an array.'
    }
]