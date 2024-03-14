import React, { useState } from "react";
import btn from '../styles/Buttons.module.css';
import Form from './form'
import styles from '../styles/Form.module.css'

const Task = (props) => {

    const [modal, setModal] = useState(false)
    return(
        <div>
            <button id='task' 
            className={btn.addTask} 
            onClick={()=>{setModal(true);}}
            type='button'>Add Task</button>
            {modal && <Form setModal = {setModal} 
                            setLists = {props.setLists}
                            setValue = {props.setValue}
                            lists = {props.lists}
                            filterLists = {props.filterLists}
                            setFilterLists = {props.setFilterLists}
                            filterItems = {props.filterItems}
                            />}
        </div>
    );
};

export default Task 






