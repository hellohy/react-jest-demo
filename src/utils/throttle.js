/**
 * @desc 函数节流
 * @param {function} func 函数
 * @param {number} wait 延迟执行毫秒数
 * @param {number} type 1 表时间戳版，2 表定时器版
 */
export default function throttle(func, wait, type) {
  return (...args) => {
    const context = this
    if (type === 1) {
      const now = Date.now()
      let previous = 0
      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    } else if (type === 2) {
      let timeout
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
  }
}
