import nodemailer from 'nodemailer'

function generateRandomNumber(size = 6, start = 0, end = 9) {
  const numbers = []
  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start
    numbers.push(randomNumber)

  }
  console.log(numbers)
  let place = 0
  let ans = 0
  for (let i = size - 1; i >= 0; i--) {
    ans += numbers[i] * (Math.pow(10, place))
    place += 1
  }
  return ans
}




export { generateRandomNumber }
