export default class Event {
  constructor() {
    this._listener = {}
  }

  on(type, fn) {
    if (typeof this._listener[type] === 'undefined') {
      this._listener[type] = []
    }
    if (typeof fn === 'function') {
      this._listener[type].push(fn)
    }
    return this
  }

  off(type, fn) {
    const eventArr = this._listener[type]
    let newEvent = []
    if (typeof fn === 'function' && eventArr instanceof Array) {
      newEvent = eventArr.filter((event) => {
        return event !== fn
      })
    }
    this._listener[type] = newEvent
    return this
  }

  fire(type, ...args) {
    const eventArr = this._listener[type]
    if (eventArr instanceof Array) {
      eventArr.forEach((event) => {
        if (typeof event === 'function') {
          event(...args)
        }
      })
    }
    return this
  }

  once(type, fn) {
    const newFn = (...args) => {
      this.off(type, newFn)
      fn.call(this, ...args)
    }
    this.on(type, newFn)
    return this
  }
}
