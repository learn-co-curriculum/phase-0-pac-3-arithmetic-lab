const expect = require('expect')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')


describe('index', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.solution.js'), 'utf-8')
  })

  var a, b

  beforeEach(() => {
    a = Math.floor(Math.random() * 1000)
    b = Math.floor(Math.random() * 1000)
  })

  it('add(a, b) adds two numbers and returns the result', () => {
    expect(add(a, b)).toEqual(a + b)
  })

  it('subtract(a, b) subtracts b from a and returns the result', () => {
    expect(subtract(a, b)).toEqual(a - b)
  })

  it('multiply(a, b) multiplies two numbers and returns the result', () => {
    expect(multiply(a, b)).toEqual(a * b)
  })

  it('divide(a, b) divides a by b and returns the result', () => {
    expect(divide(a, b)).toEqual(a / b)
  })

  it('inc(n) increments n and returns the result', () => {
    expect(inc(a)).toEqual(a + 1)
  })

  it('dec(n) decrements n and returns the result', () => {
    expect(dec(a)).toEqual(a - 1)
  })

  describe('makeInt(n)', () => {
    it('parses n as an integer and returns the parsed integer', () => {
      expect(makeInt(a.toString())).toEqual(a)
    })

    it('assumes base 10', () => {
      expect(makeInt('0x2328')).toEqual(0)
    })

    it('returns NaN as appropriate', () => {
      expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
    })
  })

  describe('preserveDecimal(n)', () => {
    it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', () => {
      expect(preserveDecimal('2.222')).toEqual(2.222)
    })

    it('returns NaN as appropriate', () => {
      expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
    })
  })
})
