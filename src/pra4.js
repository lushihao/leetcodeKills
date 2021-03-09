// var p = new Promise(function(resolve, reject){
//     console.log('执行')
//     setTimeout(function(){
//         reject(2)
//     }, 1000)
// })
// p.then(function(res){
//     console.log('suc',res)
// },function(err){
//     console.log('err',err)
// })

function isValid(s) {
    if(s.length % 2) {
        return false
    }

    const obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    let stack = []
    stack.push(s.charAt(0))

    for(let i = 1; i < s.length; i++) {
        let stackLen = stack.length
        console.log(stack)
        if(obj[stack[stackLen-1]] === s.charAt(i) ) {
            stack.pop()
        } else {
            stack.push(s.charAt(i))
        }
    }

    return stack.length > 0 ? false : true
};

const s = "()[]{}"
const x = isValid(s)
console.log(x)