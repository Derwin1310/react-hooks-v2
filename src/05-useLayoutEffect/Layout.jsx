import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "../03-examples"

export const Laouyt = () => {

  const {increment, counter } = useCounter()

  const {data, isLoading, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { author, quote } = !isLoading && data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button onClick={increment()} className="btn btn-primary">Next quote</button>
    </>
  )
}
