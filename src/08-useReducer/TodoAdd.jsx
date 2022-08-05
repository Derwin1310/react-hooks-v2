import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({description: ''})

  const onFormSubmit = (e) => {
    e.preventDefault()
    const desc = description.trim()
    if (desc.length <= 2) return

    const newTodo = {
      id: new Date().getTime(),
      description: desc,
      done: false
    }

    onNewTodo && onNewTodo(newTodo)
    onResetForm()
  }

	return (
		<form onSubmit={onFormSubmit}>
			<input onChange={onInputChange} value={description} name='description' type='text' placeholder='What Todo?' className='form-control' />

			<button type='submit' className='btn btn-primary mt-1'>
				Add
			</button>
		</form>
	)
}
