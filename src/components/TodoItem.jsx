import { useState } from "react";
import "./TodoList.css";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing && newText.trim()) {
            editTodo(todo.id, newText);
        }
        setIsEditing(!isEditing);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleEdit();
        }
    };

    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    onBlur={handleEdit}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className="edit-input"
                />
            ) : (
                <span className={todo.completed ? "strike" : ""}>{todo.text}</span>
            )}
            <button className="edit-btn" onClick={handleEdit}>✏️</button>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>🗑️</button>
        </li>
    );
};

export default TodoItem;
