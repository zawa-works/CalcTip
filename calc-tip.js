const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const countUp = async () => {
  let countMax = 30
  for (let i = 0; i < countMax; i++) {
    setPrice(tip, i, countMax,"tip_price")
    setPrice(calculatedPrice, i, countMax, "calculated_price")
    await sleep(10)
  }

  document.getElementById("tip_price").innerText = tip
  document.getElementById("calculated_price").innerText = calculatedPrice
}

let tip = 0
let calculatedPrice = 0

function calcTip(magnification) {
  let originalPrice = document.getElementById("original_price").value
  originalPrice = parseFloat(originalPrice)
  calculatedPrice = originalPrice * magnification
  calculatedPrice = round_down(calculatedPrice, 3)
  tip = calculatedPrice - originalPrice
  tip = round_down(tip, 3)
  countUp()

}

function round_down(price, decimalPlace) {
  let num = Math.pow(10, decimalPlace - 1)
  return Math.round(price * num) / num
}

function setPrice(price, count, countMax, id) {
  let num = count * price / countMax
  if (Number.isInteger(price)) document.getElementById(id).innerText = num.toFixed(0)
  else document.getElementById(id).innerText = num.toFixed(2)
}


