const numbers = [23, 54, 56, 53, 63, 34]

const student = {
    name: 'sakib khan',
    age: 42,
    movies: ['king khan', 'dhakar mastan']
}

// 1. template string
const about = `My Name Is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`

console.log(about)

//2. arrow function

const getFiftyFive = () => 55
const addSixtyFive = num => num + 65
const isEven = x => x % 2 == 0
const addThree = (num1, num2, num3) => num1 + num2 + num3
const doMath = (num1, num2) => {
    const add = num1 + num2
    return add
}

//3. spread operator
const newNumbers = [...numbers]
//create a new array form an older array and add an element
const currentNumbers = [...numbers, 55]

numbers.push(88)
numbers.push(88)
numbers.push(88)

console.log(numbers)
console.log(newNumbers)
console.log(currentNumbers)
