const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((country) => console.log(country))
names.forEach((name) => console.log(name))
numbers.forEach((number) => console.log(number))

const modifiedCountries = countries.map((country) => country.toLocaleUpperCase())
console.log(modifiedCountries)

const lengthOfCountries = countries.map((country) => country.length)
console.log(lengthOfCountries)

const numbersSquare = numbers.map((number) => number * number)
console.log(numbersSquare)

const productArray = products.map((product) => `${product.product} : ${product.price}`)
console.log(productArray)

const filterCountries = countries.filter((country) => country.includes("land"))
console.log(filterCountries)

const countriesWithSixl = countries.filter((country) => country.length == 6)
console.log(countriesWithSixl)

const countriesThatStartWithe = countries.filter((country) => country.startsWith("e"))
console.log(countriesThatStartWithe)

const productsWithPriceValues = products.filter((object) => object.price > 0)
console.log(productsWithPriceValues)

// function getStringLists (a, b, c, d) {
//     // arr = [3, "ring", true, "twist", 23, "45", null, undefined]
//     const arrWithStrings = arguments[0].map((b) => b.includes(" "))
//     return arrWithStrings
// }
// console.log(getStringLists(23, "ring", 34, true))

// let arr = [3, "ring", true, "twist", 23, "45", null, undefined]
// getStringLists.apply(this, arr)
//     function getStringLists() {
//          arrWithStrings = arr.filter(() => ) 
//         return arrWithStrings
//     }
    // console.log(ge  tStringLists())
const words = [45, "teach", undefined, null, 453, "ring", "get"]
function getStringLists (string) {
    console.log(string)
}
getStringLists(words)

const stringsList = (arr) => {
  let a = arr.filter(item => {
    return typeof item === "string"
  })
  return a;
}
let a = stringsList([45, "teach", undefined, null, 453, "ring", "get"])
console.log(a)

const sum = numbers.reduce((acc, cur) => acc + cur) 
console.log(sum)

const concateThroughArr = countries.reduce((arr, cur) => arr + cur)
const freeCountries = countries.join(", ")
console.log(`Estonia, ${freeCountries} are north Europian countries`)

const checkThruNames = names.some((a) => a.length > 7)
console.log(checkThruNames)

const checkThruCountries = countries.every((nn) => typeof nn == "land")
console.log(checkThruCountries)

const findThruCountries = countries.find((six) => six.length == 6)
console.log(findThruCountries)

const findIndexOf = countries.findIndex((find) => find.length == 6)
console.log(findIndexOf)

const findIndexOfC = countries.findIndex((find) => typeof find == "Norway")
console.log(findIndexOfC)

const findIndexOfR = countries.findIndex((find) => typeof find == "Russia")
console.log(findIndexOfR)

const totalPriceOfProduct = products.map((object) => object.price).filter((object) => object.price > 0)
console.log(totalPriceOfProduct)
