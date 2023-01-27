const calc = (value: number, cb: (arg0: number) => void): void => {
  let add = (a: number, b: number) => a + b
  function multiply(a: number, b: number): number { return a * b}

  let result: number = multiply(add(1, 2), value)
  cb(result)
}

calc(30, (result: number) => console.log(`result is ${result}`))