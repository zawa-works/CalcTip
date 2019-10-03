const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
let tip = 0
let total = 0

const lerp = (start, stop, amt) => stop == 1 ? stop:start + (stop - start) * amt
const format = value => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(2)
const countUp = async () => {
  const COUNT_MAX = 30
  for (let i = 0; i <= COUNT_MAX; i++) {
    document.getElementById('tip').innerText = format(lerp(0, tip, i / COUNT_MAX))
    document.getElementById('total').innerText = format(lerp(0, total, i / COUNT_MAX))
    await sleep(10)
  }
}

function tipRate(magnification) {
  let price = document.getElementById("price").value
  price = parseFloat(price)
  total = price * magnification
  tip = total - price
  countUp()
}


