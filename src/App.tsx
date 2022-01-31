import React, {useEffect} from "react";
import "./App.css";

export const App = () => {
    useEffect(() => {
        const socket = new WebSocket("wss://social-network.samuraijs.com/handlers/chatHandler.ashx")

        //@ts-ignore
        window.socket = socket

        socket.onmessage = (event) => {
            console.log("Data" + event.data)
        }
    }, [])

    return (
        <div className="App">
            Hello
        </div>
    )
}

export default App;
