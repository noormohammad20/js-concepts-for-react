//1. Array Destructuring

const numbers = [33, 55]
// const x = numbers[0]
// const y = numbers[1]

// const [x, y] = [33, 55]

const [x, y] = numbers

function boxify(num1, num2) {
    const nums = [num1, num2]
    return nums
}
// const [first, second] = [22, 44]
// const [first, sesond] = boxify(22, 44)
const [first, second] = [22, 44]
// console.log(boxify(22, 44))


const student = {
    name: 'sakib khan',
    age: 42,
    movies: ['king khan', 'dhakar mastan']
}
const [firstMovie, secondMovie] = student.movies


// object destructuring
// const { name, age } = { name: 'alu', age: 15 }

const { name, age } = { name: 'alu', salary: 34000, age: 15, id: 12 }


const employee = {
    ide: 'Vs code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66, weight: 67, address: 'kumar khali', drink: 'watar',
        watch: { color: 'black', price: 500, brand: 'garmin' }
    }
}
const { machine, ide } = employee
const { weight, address } = employee.specification
const { brand } = employee?.specification?.watch