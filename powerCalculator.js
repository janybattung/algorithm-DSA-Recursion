const powerCalculator = function(base, exponent) {
    if(exponent === 1){return base}
    return base * powerCalculator(base, (exponent - 1))
  }
  
  console.log(powerCalculator(10, 4))
