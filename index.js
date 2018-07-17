

function convertCToF (temp) {
  return Math.round(temp*1.8 + 32)
}

function convertFtoC (temp) {
  return Math.round((temp - 32)/1.8)
}


module.exports = {
  convertCToF,
  convertFtoC
}
