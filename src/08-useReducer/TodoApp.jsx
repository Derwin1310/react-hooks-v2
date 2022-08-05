import { useTodo } from '../hooks'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodos,
		onToggleTodo,
		handleDeleteTodo,
		handleNewTodo,
	} = useTodo(todoReducer)

	return (
		<>
			<h1>
				Todo App {todosCount} <small>pendings: {pendingTodos}</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={onToggleTodo}
					/>
				</div>

				<div className='col-5'>
					<h4>Add TODO</h4>
					<hr />

					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	)
}
