import React, {useState} from 'react'
import {Header} from "./components/Header.jsx";
import {Tabs} from "./components/Tabs.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";

function App() {
    // const todos = [
    //     {input: 'Hello! Add your first task here!', completed: true},
    //     {input: 'Get the groceries', completed: false},
    //     {input: 'Learn how to use React', completed: false},
    //     {input: 'Say hello to your friends', completed: true},
    // ]
    const [todos, setTodos] = useState([
        {input: 'Hello! Add your first task here!', completed: true},])

    const [selectedTab, setSelectedTab] = useState('Open')

    function handleAddTodo(newTodo) {
        const newTodoList = [...todos, { input: newTodo, complete: false}]
        setTodos(newTodoList)
    }

    // function handleEditTodo() {
    //
    // }
    //
    // function handleDeleteTodo() {
    //
    // }

    return (
        <>
            <Header todos={todos}/>
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}
                  todos={todos}/>
            <TodoList selectedTab={selectedTab} todos={todos}/>
            <TodoInput handleAddTodo={handleAddTodo}/>
        </>
    )
}

export default App
