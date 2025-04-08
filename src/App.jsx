import React, {useState} from 'react'
import {Header} from "./components/Header.jsx";
import {Tabs} from "./components/Tabs.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";

function App() {

    const [todos, setTodos] = useState([
        {input: 'Hello! Add your first task here!', completed: true},])

    const [selectedTab, setSelectedTab] = useState('Open')

    function handleAddTodo(newTodo) {
        const newTodoList = [...todos, { input: newTodo, complete: false}]
        setTodos(newTodoList)
    }

    function handleCompleteTodo(index) {
        // update/edit/modify
        let newTodoList = [...todos]
        let completedTodo = todos[index]
        completedTodo['complete'] = true
        newTodoList[index] = completedTodo
        setTodos(newTodoList)
        handleSaveData(newTodoList)
    }

    function handleDeleteTodo(index) {
        let newTodoList = todos.filter((val, valIndex)=>{
            return valIndex !== index
        })
        setTodos(newTodoList)
    }

    function handleSaveData(currTodos) {
        localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
    }

    return (
        <>
            <Header todos={todos}/>
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}
                  todos={todos}/>
            <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
            <TodoInput handleAddTodo={handleAddTodo}/>
        </>
    )
}

export default App
