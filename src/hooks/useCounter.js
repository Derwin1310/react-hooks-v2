import { useState } from "react"

export const useCounter = (value = 1) => {

  const [counter, setCounter] = useState(value)

  const increment = (initialVal = 1) => () => setCounter(counter + initialVal)

  const decrement = (initialVal = 1) => () => setCounter(counter - initialVal)

  const reset = () => setCounter(value)

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}