/**
 * @desc 函数去抖
 * @param {function} func 函数
 * @param {number} wait 时间(ms)
 * @param {boolean} immediate 是否立即执行一次
 */
export default function debounce(func, wait, immediate) {
  let timeout

  return (...args) => {
    const context = this

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}
