import React, { useState } from 'react';
import './App.css';
import Todotable from './TodoTable';

function TodoList() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <p>Add todo:</p>
        Description:<input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        Date:<input type="text" name="date" value={todo.date} onChange={inputChanged} />
        <input type="submit" value="Add" />
      </form>
      <Todotable todos={todos}/>
      <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
    </div>
  );
}

export default TodoList;