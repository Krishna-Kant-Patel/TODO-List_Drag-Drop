import { useContext, useEffect, useState } from "react";
import './style.css'
import myContextAPI from "../ContextAPI/ContextAPI";
import Section from "./Section";



function ListTask() {

    const { tasks, setTasks,
        todos,
        setTodos,
        inProgress,
        setInProgress,
        closed,
        setClosed } = useContext(myContextAPI)


    useEffect(() => {
        const fTodos = tasks.filter(item => item.status === 'todo')
        const fInProgress = tasks.filter(item => item.status === 'inprogress')
        const fClosed = tasks.filter(item => item.status === 'closed')
        setTodos(fTodos)
        setInProgress(fInProgress)
        setClosed(fClosed)

    }, [tasks])
    

    const statuses = ["todo", "inprogress", "closed"]
    return <>
        <div className="TodosContainer">
            {
                statuses.map((status, index) => {
                    return <Section key={index} status={status} />
                })
            }
        </div>
    </>

}
export default ListTask;

