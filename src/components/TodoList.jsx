import {TodoCard} from "./TodoCard.jsx";

export function TodoList(props) {
    const {todos} = props

    const tab = 'Open'
    const filterTodosList = tab === 'All' ?
        todos :
        tab === 'Completed' ?
            todos.filter(val => val.completed) :
            todos.filter(val => !val.completed)

    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return(
                    <TodoCard key={todoIndex}
                              todoIndex={todoIndex}
                              todo={todo}
                    />
                )
            })}

        </>
    )
}