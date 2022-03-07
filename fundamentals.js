//1. how to declare a variable using let and const . 
const fatherName = 'Arnold'
let season = 'rainy'
season = 'winter'

//2. 6 basic condition: < , > , === , !== ,  >= , <= 
//multiple condition : && , ||
if (fatherName === 'arnold' || season === 'rainy') {

}
else if (fatherName === 'Arnold') {

}
else {

}

//3. Array
//index
//length,push,

const numbers = [23, 54, 56, 53, 63, 34]
numbers[0] = 90

//4. for loop

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    console.log(number)
}

//5. function
function multiply(num1, num2) {
    const result = num1 * num2
    return result
}
const output = multiply(2, 4)
console.log(output)

//6. object
// 3 ways to Access property by name.
const student = {
    name: 'sakib khan',
    age: 42,
    movies: ['king khan', 'dhakar mastan']
}
const myVariable = 'age'
console.log(student.age) // direct by property
console.log(student['age']) // access via property name string
console.log(student[myVariable]) // access via property name in variable


