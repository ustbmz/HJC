function objectFactory () {
  let newObject = null
  let constructor = Array.prototype.shift.call(arguments)
  let result = null

  //判断参数是否合法
  if (typeof constructor !== 'function') {
    console.log(`type error`)
    return
  }

  newObject = Object.create(constructor.prototype)
  // 将this指向新函数
  result = constructor.apply(newObject, arguments)

  let flag = result && (typeof result === 'object' || typeof result === 'function')

  return falg ? result : newObject
}

objectFactory(`构造函数`, `初始化参数`)