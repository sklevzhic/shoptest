import {checkIsNanValues, isValid, square} from "./utils";


describe("Квадрат числа", () => {
    test("Правильно", () => expect(square(2)).toBe(4))
    test("Значение не меньше полученного", () => expect(square(2)).toBeLessThan(5))
    test("Значение не меньше полученного", () => expect(square(2)).toBeGreaterThan(3))
    test("не undefined", () => expect(square(2)).not.toBeUndefined())
})


describe("Валидация введенного значения от 1 до 100", () => {
    test("Правильно", () => expect(isValid(2)).toBe(true))
    test("Граница", () => expect(isValid(0)).toBe(false))
    test("Не правильно", () => expect(isValid(9999)).toBe(false))
    test("Не правильно", () => expect(isValid(-9999)).toBe(false))
    test("Не правильно", () => expect(isValid(101)).toBe(false))
})

describe("Проверка массива на пустые значения", () => {
    test("Правильно", () => expect(checkIsNanValues([1,2,3])).toEqual([1,2,3]))
    test("Правильно", () => expect(checkIsNanValues([1,2,3,null,undefined])).toEqual([1,2,3]))
})