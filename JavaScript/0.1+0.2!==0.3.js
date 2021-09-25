function numberEpsilon (arg1, arg2) {
    return Math.abs(arg1 - arg2) < Number.EPSILON
}

console.log('numberEpsilon ret:', numberEpsilon((0.1 + 0.2), 0.3))

// void__没有返回值，所以返回结果为undefined
// 可以使用 void(0) 来获取安全的undefined的值
console.log(void (0))
console.log(void (0) === undefined)

// NaN not a number
// isNaN  Number.isNaN 
console.log('== isNaN:', isNaN('a')) //true  先转换参数，不能转换为数值，直接返回true
console.log('== Number.isNaN:', Number.isNaN('a')) //false  先判断是否为数值，不是则返回flase

// == === Object.is
console.log('== ret:', 1 == '1')
console.log('=== ret:', 1 === '1')
console.log(`Object.is`, Object.is(1, '1'))

// 将字符串转为数组
console.log(`str to Array`, [...'helloWorld'])

const [first, second, ...rest] = [1, 2, 3, 4, 5]
console.log(first)
console.log(second)
console.log(rest)
