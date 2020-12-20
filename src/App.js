import React, { useState, useEffect } from 'react';
import './App.css'
// Components Imported from here
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
	// States
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [todos, status]);

	// Functions
	const filterHandler = () => {
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter(todo => todo.completed === true));
			break;

			case 'uncompleted':
				setFilteredTodos(todos.filter(todo => todo.completed === false));
			break;

			default:
				setFilteredTodos(todos);
			break;
		}
	}

	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		}
		else {
			let todoFromLocal = JSON.parse(localStorage.getItem('todos'));
			// console.log(todoFromLocal);
			setTodos(todoFromLocal);
		}
	}

	return (
		<div className="App">
			<header>
				<h1>Karomi (करोमि)</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				status={status}
				setTodos={setTodos}
				setStatus={setStatus}
				setInputText={setInputText}
				
			/>
			<TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
		</div>
	);
}

export default App;
