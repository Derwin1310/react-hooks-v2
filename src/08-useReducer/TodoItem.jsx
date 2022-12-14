export const TodoItem = ({
	id,
	description,
	done,
	onDeleteTodo,
	onToggleTodo,
}) => {
	return (
		<li className='list-group-item d-flex justify-content-between mt-2'>
			<span
				onClick={() => onToggleTodo(id)}
				className={`align-self-center ${
					done ? 'text-decoration-line-through' : ''
				}`}
			>
				{description}
			</span>
			<button onClick={() => onDeleteTodo(id)} className='btn btn-danger'>
				Delete
			</button>
		</li>
	)
}
