module.exports = function reverse (n) {
    let i = 0
    let result = ''
    n = Math.abs(n)
    n = n.toString()
    while (n.length > i) {
        result = `${n[i]}${result}`
        i += 1
    }
    return parseInt(result, 10)
}

