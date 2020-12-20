import React from 'react';
import './App.css'
// Components Imported from here
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
	return (
		<div className="App">
			<header>
				<h1>My Todo List</h1>
			</header>
			<Form />
			<TodoList />
		</div>
	);
}

export default App;
