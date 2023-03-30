let check = 'apple123orange50.12tomato500.99apple54.473'
let prices = check.match(/\d+(\.\d+)?/g)
prices = prices.map((num) => parseFloat(num))
console.log(prices.reduce((acc, value) => acc += value))