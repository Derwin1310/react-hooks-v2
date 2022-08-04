import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('aw shit, here we go again...');
  }

  return `${iterationNumber} iterations done`
}

const heavyShit = val => () => heavyStuff(val)

//el useMemo lo utilizamos para guardar en memoria los valores de funciones con procesos pesados que no queremos que se ejecuten cuando el componente se vuelve a renderizar sin haber cambios o no se haya llamado dicha funcion
export const MemoHook = () => {
  const [show, setShow] = useState(true)
  const { counter, increment } = useCounter(4000)

  const memorizedValue = useMemo(heavyShit(counter), [counter])

  return (
    <>
      <h1>Counter: <small>{counter}</small></h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button
        className="btn btn-primary"
        onClick={increment()}
      >
        +1
      </button>

      <button
        className="btn btn-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}
