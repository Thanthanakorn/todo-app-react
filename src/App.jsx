import React from 'react'
import {Header} from "./components/Header.jsx";
import {Tabs} from "./components/Tabs.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";

function App() {
    const todos = [
        {input: 'Hello! Add your first task here!', completed: true},
        {input: 'Get the groceries', completed: false},
        {input: 'Learn how to use React', completed: false},
        {input: 'Say hello to your friends', completed: true},
    ]

    return (
        <>
            <Header todos={todos}/>
            <Tabs todos={todos}/>
            <TodoList todos={todos}/>
            <TodoInput/>
        </>
    )
}

export default App
