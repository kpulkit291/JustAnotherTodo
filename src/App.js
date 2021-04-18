import React, {useState} from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Menu from "./components/Menu";
import "./styles.css";
import { connect } from "react-redux"

function App() {
    return (
    <div className="todo-container">
        <AddTodo/>
        <TodoList/>
        <Menu/>
    </div>)
}

export default App;