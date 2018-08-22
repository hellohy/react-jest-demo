import { doesNotReject } from 'assert'
import debounce from './debounce'
import Event from './event'

const { expect } = require('chai')

const event = new Event()

let flag = 0

function test() {
  flag += 1
}

describe('debounce', () => {
  it('debounce non immediate', (done) => {
    event.on('test', debounce(test, 1000))
    const time = setInterval(() => {
      event.fire('test')
    }, 100)
    setTimeout(() => {
      clearInterval(time)
      expect(flag).to.equal(0)
      done()
    }, 2000)
  })

  it('debounce immediate', (done) => {
    event.on('test', debounce(test, 1000, true))
    const time = setInterval(() => {
      event.fire('test')
    }, 100)
    setTimeout(() => {
      clearInterval(time)
      expect(flag).to.equal(1)
      done()
    }, 2000)
  })
})
