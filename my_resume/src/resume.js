import react from "react"
import reactdom from "react-dom/client"
import "./index.css"
import App from "./App";

const Resume=()=><h1>hello world</h1>


const root=reactdom.createRoot(document.getElementById("root"))
root.render(<App/>)