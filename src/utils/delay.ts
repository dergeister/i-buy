const delayInMilliseconds = 1000

export const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved delay')
    }, delayInMilliseconds)
  })
}
