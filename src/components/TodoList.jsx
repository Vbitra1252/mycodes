import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "work on algoritms", completed: false },
        { id: 2, text: "make a ui design", completed: false },
        { id: 3, text: "create a new project", completed: true }
    ]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo("");
        }
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id, newText) => {
        setTodos(
            todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
        );
    };

    return (
        <div className="todo-container">
            <h2>Todo List App</h2>
            <div className="todo-input">
                <input
                    type="text"
                    placeholder="ENTER TODO"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>+</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
