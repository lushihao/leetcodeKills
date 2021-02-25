
const aList = [1, 1, 2, 3, 4, 5, 7, 10]

const x = Array.from(new Set(aList))
let bList = []

x.map((value, index) => {
    bList[value] = value
})

console.log(bList)
let valueList = []
let valueA = 0

let counter = 0
for( let value of bList) {
    if(!value) {
        counter += 1
        valueList.push(valueA)
    }
    valueA += 1

}


// console.log(counter, valueList)

const aStrting = 'hi hello world.'
const bString = aStrting.split(' ').reverse().join(' ')
console.log(bString)