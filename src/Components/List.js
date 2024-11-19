import { useState } from 'react';



function List() {
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [tasks,setTasks] = useState([

  ])
  const [taskCounter,setTaskCounter] = useState(0)
  



  const Delete = ( id ) => {
      
    setTasks(tasks.filter((task)=>task.id !==id))
    
  

}
  const youSure = () =>{
    if(window.confirm("are you sure you want to clear all?"))
    {
      Clear()
    }
    else
    {

    }
  }

  const Clear = () => {
    setTasks([])
  }

  const handleSubmit = () =>{
    
    setTaskCounter(taskCounter+1)
    const maxId = taskCounter

    const newItem ={ id :maxId,
      name: name,
    description: description, 
    taskComplete :false
    }




      const newTask = [...tasks,newItem];

      setTasks(newTask)
      setName('')
      setDescription('')
       
  }
    
const check = (id,completed) =>{
  
  if (completed === false)
    {
  const finishedTask = tasks.map((task)=>task.id === id? {...task,taskComplete : true} :task)
  setTasks(finishedTask)
}
  
  else
  {
  const finishedTask = tasks.map((task)=>task.id === id? {...task,taskComplete : false} :task)
  setTasks(finishedTask)
  }
  
} 




  return (
    <div className="App"> 
      <header className="App-header">
        <h1> To do list</h1>
        


        <div class ="InputArea">
          


          <input 
          name = 'name'
          placeholder='Name'
          value={name}
          onChange={(e) =>setName(e.target.value)}/>
          
          
          <textarea 
          name = 'description'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={10}
          
          ></textarea>
          


        <button type='submit' onClick={handleSubmit}>submit</button>


          

        </div>


        
        <ul>
            {tasks.map((task,index) => 
            <div key={index}>
              <div class = "ListArea" style={{opacity: task.taskComplete ? 0.5 : 1.0,}}>
              <div class ="TaskName">{task.name}<button onClick={() => Delete(task.id)} >Delete</button> <input onChange={() => check(task.id,task.taskComplete)} type ="checkbox"></input></div> 
              
               <div class = "TaskDescription">{task.description}</div>
               </div>

               
            </div>
            )}



        </ul>


        <button onClick ={()=> youSure()}>Clear

        </button>
        
      </header>
    </div>
  );
}

export default List;
