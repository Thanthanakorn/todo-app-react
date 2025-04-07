export function Tabs() {
    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav className={"tab-container"}>
            {/* This technique is called "map" and is used to
            iterate over an array and return a new array of
            elements. */}
            {tabs.map((tab, tabIndex) => {
                return (
                    <button key={tabIndex}
                    className={"tab-button"}>
                        <h4>{tab} <span>(0)</span></h4>
                    </button>
                )
            })}

        </nav>
    )
}