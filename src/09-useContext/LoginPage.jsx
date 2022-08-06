import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext)

	return (
		<>
			<h1>Login Page</h1>
			<hr />

			<pre>{JSON.stringify(user, null, 3)}</pre>

			<button
				onClick={() =>
					setUser({
						user: 'derwin',
						email: 'derwin1310@gmail.com',
						profession: 'dev',
					})
				}
				className='btn btn-primary'
			>
				Set user
			</button>
		</>
	)
}
