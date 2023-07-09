import { useContext } from "react";
import './style.css'
import myContextAPI from "../ContextAPI/ContextAPI";
import toast  from "react-hot-toast";
import { useDrag, useDrop } from "react-dnd";

const Section = ({ status }) => {
    const {tasks, setTasks,
        todos,
        inProgress,
        closed} = useContext(myContextAPI)
        const [{ isOver }, drop] = useDrop(() => ({
            accept: "task",
            drop:(item)=> addtasktoSection(item.id),
            collect: (monitor) => ({
              isOver: !!monitor.isOver()
            })
          }))

        let text = "Todo"
        let taskmap = todos
        let bg = 'red'
        if(status==="todo"){
            text = "Todo"
            bg = "yellow"
            taskmap = todos
        }
        if(status==="inprogress"){
            text = "In Progress"
            bg = "blue"
            taskmap = inProgress
        }
        if(status==="closed"){
            text = "Closed"
            bg = "orange"
            taskmap = closed
        }
        const addtasktoSection = (id) =>{
            setTasks((prev) => {
                const updatedTasks = prev.map((ele)=>{
                    if(ele.id===id){
                        return {...ele, status: status}
                    }
                    return ele
                })
                localStorage.setItem("tasks", JSON.stringify(updatedTasks))
                return updatedTasks
            })
        }
    return <>
        <div ref={drop} className="SectionContainer">
        <div className="section" style={{backgroundColor:`${bg}`}}>
        <h2>{text}</h2>
        </div>
        
            {taskmap &&
            taskmap.map((item)=><Tasks item={item} tasks={tasks} setTasks={setTasks} />)}
        
        </div>
    </>
}

export default Section;



const Tasks = ({item, tasks, setTasks}) =>{
    const handleRemove=(id)=>{
        // console.log(id)
        const ftask = tasks.filter(item => item.id!==id)
        localStorage.setItem("tasks", JSON.stringify(ftask))
        setTasks(ftask)
        toast.error("Todo Removed")
    }
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item:{id: item.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
      console.log(isDragging)
    return <>
                <div ref={drag} className={`todos ${isDragging ? "opasity": ""}`}>
                    <p>{item.name}</p>
                    <button onClick={(()=>{
                        handleRemove(item.id)
                    })}>R</button>
                </div>
                </>
}