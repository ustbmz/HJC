// proxy 是ES6新增的语法，可以自定义对象的操作

// 实现一个响应式

let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get (target, property, receiver) {
      getLogger(target, property)
      return Reflect.get(target, property, receiver)
    },
    set (target, property, value, receiver) {
      setBind(value, property)
      return Reflect.set(target, property, value)
    }
  }

  return new Proxy(obj, handler)
}

let obj = { a: 1 }
let p = onWatch(
  obj,
  (v, property) => {
    console.log(`监听到属性${property}改为${v}`)
  },
  (target, property) => {
    console.log(`${property} = ${target[property]}`)
  }
)
console.log(p.a)
p.a = 2
console.log(p.a)