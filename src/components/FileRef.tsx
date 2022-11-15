type ButtonRef = {
    current: HTMLButtonElement | null
}

const ref: ButtonRef = {
    current: null
};

const colors = [
    "red", 
    "blue",
    "green",
    "yellow",
    "pink",
]

export const FileRefExample = () => {
    return <button ref={ref} style={{
        padding: 20,
        fontSize: "2rem"
    }}
    onClick={
        () => {
            ref.current?.setAttribute("class", colors[Math.round(Math.random() * 4)]);
        }
    }>
        Click me!
    </button>
}