import { useForm } from "../hooks/useForm"

export function FormWithCustomHook() {

  const { formState, onInputChange, onResetForm } = useForm({
      username: '',
      email: '',
      password: ''
  })

  const { username, email, password } = formState

  return (
    <>
      <h1>Form with custom hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="derwin1310@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn - btn-primary mt-2">Reset</button>

    </>
  )
}
