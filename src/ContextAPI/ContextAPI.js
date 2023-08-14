import { createContext } from "react";
import App from "../App";
import { useState } from "react";


const myContextAPI = createContext();
export default myContextAPI;



export function CustomProvider() {

    //created all variables for project
    const [tasks, setTasks] = useState([]);
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);

   return (<myContextAPI.Provider value={{
        tasks,
        setTasks,
        todos,
        setTodos,
        inProgress,
        setInProgress,
        closed,
        setClosed
    }} >
        <App />
    </myContextAPI.Provider>)
}