import { useCounter } from "../hooks/useCounter"

export function CounterCutsomHook() {

  const { counter, increment, decrement, reset } = useCounter()

  const a = (val) => () => increment(val)

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>

      <hr />

      <button className='btn btn-primary' onClick={() => increment(5)}>+1</button>
      <button className='btn btn-primary' onClick={reset}>Reset</button>
      {/* <button className='btn btn-primary' onClick={decrement()}>-1</button> */}
    </>
  )
}
