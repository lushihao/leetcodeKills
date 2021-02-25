const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

// promise接受一个函数 有三种 状态 俩个回调
// 写一个构造函数接收一个参数  有三种状态 成功结果 失败结果 成功回调 失败 回调
// 构造函数的原型有一个.then 方法 接收俩个参数  判断状态 如果成功调用 成功函数 失败 调用失败函数 pending 就存起来

function Promise (executor) {
  var _this = this
  this.state = PENDING  // 状态
  this.value = undefined  // 成功结果
  this.reason = undefined;  // 失败原因
  this.onFulfilled = [];//成功的回调
  this.onRejected = []; //失败的回调

  function resolve (value) {
    if (_this.state === PENDING) {
      _this.state = FULFILLED
      _this.value = value
      _this.onFulfilled.forEach(fn => fn(value))
    }
  }
  function reject (reason) {
    if (_this.state === PENDING) {
      _this.state = REJECTED
      _this.reason = reason
      _this.onRejected.forEach(fn => fn(reason))
    }
  }
  try {
    executor(resolve, reject)
  } catch (e) {}
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  if (this.state === FULFILLED) {
    typeof onFulfilled === 'function' && onFulfilled(_this.value)
  }
  if (this.state === REJECTED) {
    typeof onRejected === 'function' && onRejected(_this.reason)
  }
  if(this.state === PENDING){
    typeof onFulfilled === 'function' && this.onFulfilled.push(onFulfilled)
    typeof onRejected === 'function' && this.onRejected.push(onRejected)
  } 
}

// module.exports = Promise;

console.log('ss')
var p = new Promise((resolve, reject)=>{
  console.log('ss2')

  setTimeout(()=>{
      resolve(4)
  }, 0)
})
p.then((res)=>{
  //4 res
  console.log(res, 'res')
})
p.then((res1)=>{
  //4 res1
  console.log(res1, 'res1')
})

console.log('ss3')
