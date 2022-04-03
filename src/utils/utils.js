export function square(x) {
    return x * x
}

export function isValid(value) {
    if (value > 1 && value <= 100) {
        return true
    } else {
        return false
    }
}

export function checkIsNanValues(array) {
    return array.filter(n => n)
}