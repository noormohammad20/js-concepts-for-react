//1. JSON => stringify , parse
const student = {
    name: 'sakib khan',
    age: 42,
    movies: ['king khan', 'dhakar mastan']
}
const studentJson = JSON.stringify(student)
console.log(student)
console.log(studentJson)

const studentObj = JSON.parse(studentJson)
console.log(studentObj)

//2. fetch 
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))



//keys, values
const keys = Object.keys(student)
const values = Object.values(student)

//for
const numbers = [23, 53, 67, 254, 76, 322, 54, 75]
numbers.forEach(number => console.log(number))
numbers.map(number => number * 2)

// for of on array like object
//loop on an object using for in

// add or remove on a array
const products = [

    { name: 'laptop', price: '3200', brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: '7000', brand: 'iphone', color: 'golden' },
    { name: 'watch', price: '3000', brand: 'casio', color: 'black' },
    { name: 'sungluss', price: '300', brand: 'revon', color: 'yellow' },
    { name: 'camera', price: '2200', brand: 'canon', color: 'gray' }
]

const newProduct = { name: 'webcap', price: 700, color: 'red' }

// copy products array and then add new product

const newProducts = [...products, newProduct]

//create a new array without one specific item 
//remove phone means create a new array without the phone 

const remaining = products.filter(product => product.name != 'phone')