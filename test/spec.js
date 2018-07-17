const expect = require('chai').expect

const calc = require("../index");

describe('temp calculator', () => {

  it('converts C to F', () => {
    expect(calc.convertCToF(20)).to.eql(68)
  })

  it('converts F to C', () => {
    expect(calc.convertFtoC(89)).to.eql(32)
  })

  it('rounds to a whole number', () => {
    expect(calc.convertFtoC(102)).to.eql(39)
  })
})
