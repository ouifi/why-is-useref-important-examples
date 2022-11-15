import { useRef } from "react";

const colors = [
    "red", 
    "blue",
    "green",
    "yellow",
    "pink",
]

export const CorrectRefExample = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    return <button ref={buttonRef} style={{
        padding: 20,
        fontSize: "2rem"
    }}
    onClick={
        () => {
            buttonRef.current?.setAttribute("class", colors[Math.round(Math.random() * 4)]);
        }
    }>
        Click me!
    </button>
}