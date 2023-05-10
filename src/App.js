import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTodo = { id: uuidv4(), title: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 btn-primary rounded-pill">ToDoのアプリ</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-6">
          <form onSubmit={handleFormSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Todoの追加"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className="btn btn-success rounded-circle" type="submit">
                追加
              </button>
            </div>
          </form>
          <ul className="list-group">
            {todos.map((todo) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
                {todo.title}
                <button className="btn btn-danger btn-sm rounded-pill" onClick={() => handleTodoDelete(todo.id)}>
                  削除
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
