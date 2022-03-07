// 'almas',5,true,{},[]
// '' ,0 ,false,undefine,null
//check truethy
let myVar = 5
if (myVar) {
    myVar = myVar * 100
}
else {
    myVar = 0
}

let myMoney = 50
// you check negative  or falsy anything
if (!myMoney) {

}

const money = 80
let food
if (money > 100) {
    food = 'birani'
}
else {
    food = 'cha biskut'
}

//ternary
let food1 = money > 100 ? 'birani' : 'cha biskut'
console.log(food1)

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water'

// shortcut number to string convertion
const number1 = 51
console.log(number1)
const numStr = number1 + ''
console.log(numStr)

// string to number
const num = '560'
const input = +num
console.log(input)

//
let isActive = true
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user')
// isActive ? showUser() : hideUser()
// use && if the left side is true then right side will be executed
isActive && showUser()
// use || if the left side is false then right side will be executed
isActive || hideUser()

// toggle
isActive = !isActive