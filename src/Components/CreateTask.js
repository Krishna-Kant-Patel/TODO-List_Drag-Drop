import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';
import myContextAPI from "../ContextAPI/ContextAPI";
import { useContext } from "react";

function CreateTask() {

    const {tasks, setTasks} = useContext(myContextAPI)

    const [task, setTask] = useState({
        id: '',
        name: "",
        status: "todo"
    })
    // console.log(task)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.name.length < 3) {
            return toast.error("Please Enter To Do");
        }
        else {
            setTasks(() => {
                const list = [...tasks, task]
                localStorage.setItem("tasks", JSON.stringify(list))
                return list
            })
         toast.success("Task Created")
         setTask({
            id: '',
            name: "",
            status: "todo"
        })
        }
    }
    return <>
        <form onSubmit={handleSubmit} className="Form">
            <input type="text" value={task.name} onChange={((e) => {
                setTask({
                    ...task,
                    id: uuidv4(),
                    name: e.target.value
                })
            })} />
            <button>Create</button>
        </form>
    </>

}
export default CreateTask;