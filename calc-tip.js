function calcTip(magnification){
    let originalPrice = document.getElementById("original_price").innerText
    originalPrice = parseFloat(originalPrice)
    let calculatedPrice = originalPrice * magnification
    calculatedPrice = round_down(calculatedPrice,3)
    let tip = calculatedPrice - originalPrice
    document.getElementById("tip_price").innerText = "tip: " + tip
    document.getElementById("calculated_price").innerText = "sum: " + calculatedPrice
  }

function round_down(price,decimalPlace){
    let num = Math.pow(10, decimalPlace-1)
    return Math.round(price * num) / num
}