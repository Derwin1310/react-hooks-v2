import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"

//utilizamos memo cuando no queremos que el componente hijo se renderize cuando el padre cambia, solo se renderizara si cambian sus props(siempre y cuando no sean valores por referencia, en ese caso utilizar un useCallback en el padre)
export const Memorize = () => {
  const [show, setShow] = useState(true)
  const { counter, increment } = useCounter(10)

  return (
    <>
      <h1>Counter: <Small value={counter} /></h1>
      <hr />

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
