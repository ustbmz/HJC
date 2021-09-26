const mutiple = (...args) => {
  // 多个参数收敛至一个数组
  console.log(args)
  let result = 1
  for (var value of args) {
    result *= value
  }

  return result
}

let ret = mutiple(1, 2, 3, 4)
console.log('🚀 ~ file: Array.js ~ line 10 ~ ret', ret)

console.log(['string', 'cdm'].includes('cdm'))
console.log(['1', '2'].includes('1'))
