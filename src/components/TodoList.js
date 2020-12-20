import React from 'react';
import Todo from './Todo.js'

function TodoList({ todos, setTodos, filteredTodos }) {
    console.log(todos);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map(todo => (
                        <Todo 
                            key={todo.id}
                            text={todo.text}
                            todos={todos}
                            todo={todo}
                            setTodos={setTodos}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;