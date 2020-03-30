/**
 * 十六进制随机颜色生成器
 */
function randomHexColor() {
  let hex = Math.floor(Math.random() * 16777216).toString(16)
  hex.length < 6 && (hex = '0' + hex)
  return `#${hex}`
}










module.exports = {
  randomHexColor: randomHexColor
}

