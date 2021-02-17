// const a = new Set([1,2])
// const b = new Set([1,2])
// const c = a === b ? 't' : "f"
// console.log(c)


const aFunction = (n: string[]): number => {
    for(let i of n) {
        console.log(i)
        if(i !== "cc") {
            aFunction(["cc"])
            console.log('11')
        }
        console.log('22')
    }
    return 1

}

const a: string[] = ["aa", "bb", "cc"]
const result: number = aFunction(a)

console.log(result)

export {}

