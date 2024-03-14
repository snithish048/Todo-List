import styles from '../styles/todoList.module.css'
import TodoTask from './todoTask'
import React, { useState, useEffect} from "react" 



const TodoList = (props)=>{
    
    useEffect (() => {
        props.filterItems(props.value)
        }, [props.lists])
    

    return(
        <div className={styles.listContainer}>
        {props.filterLists.map((item,index)=>{
             return(
                <TodoTask
                key = {index}
                item = {item}
                {...props}   
             /> 
             )
        })}
        </div>

    )
}

export default TodoList