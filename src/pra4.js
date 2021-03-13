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
let a = [1, 2]
console.log(a instanceof Object)