import { useState } from 'react';
import './App.css';


function App() {
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [tasks,setTasks] = useState([

  ])




  const Delete = ( name,description ) => {
      
    setTasks(tasks.filter(task => task.name !== name && task.description !== description));
    

  

}

  const handleSubmit = () =>{
    

    const newItem ={ name: name,
    description: description 
    }




      const newTask = [...tasks,newItem];

      setTasks(newTask)
       
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
              <div class = "ListArea">
              <div class ="TaskName">{task.name}<button onClick={() => Delete(task.name, task.description)} >Delete</button></div> 
              
               <div class = "TaskDescription">{task.description}</div>
               </div>

               
            </div>
            )}



        </ul>


        
        
      </header>
    </div>
  );
}

export default App;
