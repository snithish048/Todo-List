import styles from '../styles/todoList.module.css'
import React, { useState, useEffect} from "react" 
import Delete from '../assets/delete.svg'
import Edit from '../assets/Edit.svg'

const TodoTask = (props)=>{

    const handleCheck = ()=>{
      props.updateStatus(props.item)
        }

    const handleDelete = ()=>{
        props.deleteList(props.item.id)
    }


    return(
            <div className={styles.todoContainer}>
                <div className={styles.checkboxContainer}>
                    
                    <label htmlFor="checked" >
                    <input  className={styles.checkboxInput} 
                        type="checkbox" 
                        id="checked" 
                        name="check" 
                        checked = {props.item.status=='Completed'?true:false}                            
                        onChange={handleCheck}
                        />

                    </label>
                
                    <div className={styles.innerDiv} > 
                        <span className={styles.title} 
                        style={props.item.status=='Completed'?{textDecoration: 'line-through'}:{textDecoration: 'none'}} 
                        >{props.item.task}</span> 
                        {/* <p className={styles.title}>{item.Title}</p>  */}
                        <p className={styles.time}>{props.item.time}</p>
                    </div>

                </div>
                
                <div className={styles.iconContainer}>
                    <img className={styles.Icon} 
                     onClick={handleDelete}
                    src={Delete} alt="delete" />
                    {/* <img className={styles.Icon} src={Edit} alt="Edit" /> */}
                </div>
            </div> )}
   
export default TodoTask