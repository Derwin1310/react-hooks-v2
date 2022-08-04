import { useEffect, useState } from "react"
import { Message } from "./Message"

export function SimpleForm() {

  const [formState, setFormState] = useState({
    username: 'Coderwin',
    email: 'derwin1310@gmail.com'
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  // useEffect(() => {
    
  // })

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {username === 'Coderwin' && <Message />}

      <input
        type="email"
        className="form-control mt-2"
        placeholder="derwin1310@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

    </>
  )
}
