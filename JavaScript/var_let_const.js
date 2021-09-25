const a = () => {
  var value
  const ret = () => {
    value = 2
    let value2
    const value3 = 3
    console.log(value2)
    console.log(value3)
  }

  ret()
  console.log(value)
}

a()