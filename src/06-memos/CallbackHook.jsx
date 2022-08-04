import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

//El use callback se utiliza igual que el useMemo pero este se utiliza para memorizar funciones que le pasamos a los componentes hijos
export const CallbackHook = () => {
  const [show, setShow] = useState(true)
  const [counter, setCounter] = useState(10)

  const increment = useCallback(() => {setCounter(val => val + 1)}, [])

  useEffect(() => {increment}, [increment])

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement increment={increment} />

      <button
        className="btn btn-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}
