function toBinary(num) {
    num = num | 0
    if (num <= 1) return num.toString();
    const bits = (num % 2).toString()
    return toBinary(num / 2) + bits
  }

// function convertToBinary(input){
// if(input > 0){
//     let binaryFormat = Math.floor(input % 2);
//     return (convertToBinary(Math.floor(input / 2)) + binaryFormat)
// } else {return ''}
// }