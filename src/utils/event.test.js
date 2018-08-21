import Event from './event'

const { expect } = require('chai')

const event = new Event()

const obj = {
  addResult: 0,
  subResult: 0,
}

const add = (a = 0, b = 0) => {
  obj.addResult = a + b
}

const sub = (a = 0, b = 0) => {
  obj.subResult = a - b
}

describe('Event', () => {
  it('fire events', () => {
    event.on('add', add)
      .on('sub', sub)
      .on('add', () => 'add')

    event.fire('add', 10, 3)
    event.fire('sub', 10, 3)
    expect(obj.addResult).to.equal(13)
    expect(obj.subResult).to.equal(7)
  })

  it('remove event', () => {
    event.on('add', add)
    event.fire('add', 10, 3)
    event.off('add', add)
    event.fire('add', 3, 4)
    expect(obj.addResult).to.equal(13)
  })

  it('once event', () => {
    event.once('add', add)
    event.fire('add', 3, 4)
    event.fire('add', 3, 5)
    expect(obj.addResult).to.equal(7)
  })
})
