export function TodoInput() {
    return (
        <div className={"input-container"}>
            <input placeholder={"Add a new task here!"}/>
            <button>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}