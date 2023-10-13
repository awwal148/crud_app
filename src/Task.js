export const Task = (props) => {
    return (
<div 
className ="task"
style={{backgroundColor: props.completed ? "green" : "white"}}>
   <h1>{props.taskName}</h1>
   <div>
    <button onClick= {() => props.completeTask(props.id)}>Task Completed</button>
   <button onClick={() => props.deleteTask(props.id)}> Delete </button>
   </div>
      </div>
    )
}