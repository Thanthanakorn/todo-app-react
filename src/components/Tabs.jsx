export function Tabs(props) {
    const {todos, selectedTab, setSelectedTab} = props

    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav className={"tab-container"}>
            {/* This technique is called "map" and is used to
            iterate over an array and return a new array of
            elements. */}
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All' ?
                    todos.length :
                    tab === 'Open' ?
                        todos.filter(val => !val.completed).length :
                        todos.filter(val => val.completed).length
                return (
                    <button onClick={() => {
                        setSelectedTab(tab)
                    }}
                        key={tabIndex} className={"tab-button "
                    + (tab === selectedTab ? ' tab-selected' : ' ')}>
                        <h4>{tab} <span>{numOfTasks}</span></h4>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}