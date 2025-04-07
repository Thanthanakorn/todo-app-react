import {TodoCard} from "./TodoCard.jsx";

export function TodoList(props) {
    const {todos} = props

    const tab = 'All'

    return (
        <>
            {todos.map((todo, todoIndex) => {
                return(
                    <TodoCard key={todoIndex}
                              todoIndex={todoIndex}
                              {...props}
                    />
                )
            })}

        </>
    )
}