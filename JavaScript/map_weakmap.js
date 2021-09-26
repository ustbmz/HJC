const map = ([
  ["name", 'zhangsan'],
  ["age", 18]
])

for (let item of map.keys()) {
  console.log(item)
}
for (let item of map.values()) {
  console.log(item)
}
for (let item of map.entries()) {
  console.log(item)
}

map.forEach((value, key, map) => {
  console.log(key, value)
})