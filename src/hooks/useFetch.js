import { useEffect, useState } from "react"

export function useFetch(url) {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  })

  const getFeth = async () => {
    setState({
      ...state,
      isLoading: true,
    })

    const res = await fetch(url)
    const data = await res.json()

    setState({
      data,
      isLoading: false,
      error: null,
    })
  }

  useEffect(() => {
    getFeth()
  }, [url])

  return {...state}
}
