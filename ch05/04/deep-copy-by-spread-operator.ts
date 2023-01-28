const oArray: number[] = [1, 2, 3, 4]
const deepCopiedArray: number[] = [...oArray]
deepCopiedArray[0] = 0
console.log(oArray, deepCopiedArray)