// import Modal from 'react-modal'
import React, { useState, useEffect} from "react" 
import styles from '../styles/Form.module.css'
import btn from '../styles/Buttons.module.css';
import TodoList from './todoList';

function Form(props){

    const[task, setTask] = useState('')
    let n
    const now = new Date();
    let hours = now.getHours();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hours to 12-hour format
    
    const hoursString = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hoursString}:${minutes} ${amOrPm}`;

    const addList= ()=>{
      props.setLists((prevItems) =>{
        n = Math.ceil(Math.random()*100)
        return(
          [...prevItems, {id:n, task:task, status:'Incomplete', time:currentTime}]
        )})
      setTask('')
      props.setModal(false)
      props.setValue('all')
      // props.filterItems('all')
    }
    
    return(
        <>
        <div className={styles.overlay} />
            <div className={styles.modal} >

            <h1 className={styles.h1}>Add TODO</h1>

            <label className={styles.label} htmlFor='title'>Title</label> 
            <input className={styles.input} 
            id='title' 
            type="text" 
            value={task} 
            onChange={(e)=>setTask(e.target.value)}/>

            {/* <label className={styles.label} htmlFor='status'>Status</label> 
            <select onChange={handleChange} value={props.taskStatus} id='status' className={styles.select} >
                <option value="Incomplete">Incomplete</option>
                <option value="Completed">Completed</option>
            </select> */}

            <div>
                <button 
                    className={btn.addTask}
                    onClick={addList}
                    >Add Task</button>
                <button 
                    className={btn.cancelButton}
                    onClick={()=> {props.setModal(false);props.setFilterLists(props.lists)}}
                    >Cancel</button>
            </div>

        </div>
        </>
        
    )
}

export default Form