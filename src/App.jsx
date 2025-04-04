import React from 'react'
import {Header} from "./components/Header.jsx";
import {Tabs} from "./components/Tabs.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";

function App() {
    return (
        <div>
            <Header/>
            <Tabs/>
            <TodoList/>
            <TodoInput/>
        </div>
    )
}

export default App
