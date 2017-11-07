const log = console.log.bind(console)

const e = (element, selector) => {
    return element.querySelector(selector)
}

const es = (element, selector) => {
    return element.querySelectorAll(selector)
}

const bindEvent = (element, eventName, callback) => {
    element.addEventListener(eventName, callback)
}

const unbindEvent = (element, eventName, callback) => {
    element.removeEventListener(eventName, callback)
}

const bindAll = (element, selector, eventName, callback) => {
    const eles = es(element, selector)
    eles.forEach(ele => bindEvent(ele, eventName, callback))
}

const collide = (a, b) => {
    if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
        if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
            return true
        }
    }
    return false
}

const aInb = (x, x1, x2) => {
    return x >= x1 && x <= x2
}

const randomNum = (start, end) => {
    const n = Math.random() * (end - start + 1)
    return  Math.floor(n + start)
}

const pInRect = (x, y, o) => {
    if (o.x <= x && x <= o.x + o.w) {
        if (o.y <= y && y <= o.y + o.h) {
            return true
        }
    }
    return false
}