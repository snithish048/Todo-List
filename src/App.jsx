import React, { useState } from "react"
import PageTitle from './components/pageTitle'
import FilterButton from './components/FilterButton';
import Task from './components/taskButton';
import styles from '../src/app.module.css';
import TodoList from './components/todoList';
import tasks from './assets/data'
 

function App() {

  const [lists, setLists] = useState([])
  const [value, setValue] = useState('all');
  const [filterLists, setFilterLists] = useState(lists)

  const filterItems = (val)=>{
    setValue(val)
    if(val == 'all'){
      setFilterLists(lists)
      }else if(val == 'Completed'){
      setFilterLists(lists.filter((item)=>item.status=='Completed'))
      }else if(val =='Incomplete'){
      setFilterLists(lists.filter((item)=>item.status=='Incomplete'))
    }
  }

  const deleteList = (id)=>{
    setLists(lists.filter((value)=>value.id!==id))
  }


  const updateStatus = (value) => {
    const updatedLists = lists.map(item => {
      if (item.id == value.id) {
        return ( (value.status=='Incomplete')? {...item, status: 'Completed'}:{...item, status: 'Incomplete'});
      }
      return item; 
    });
    setLists(updatedLists);
  };


  return (
   <>
      <PageTitle>TODO LIST</PageTitle>
      <div className = {styles.topFlex}>
        <Task setLists = {setLists}
              setValue = {setValue}
              lists = {lists}
              filterItems = {filterItems}
              setFilterLists = {setFilterLists}
              filterLists = {filterLists}
        />
        <FilterButton value = {value}
                      setValue = {setValue}
                      filterItems = {filterItems}
                      filterLists = {filterLists}/>
      </div>
      <TodoList lists = {lists}
                deleteList = {deleteList}
                updateStatus = {updateStatus}
                filterLists = {filterLists}
                setFilterLists = {setFilterLists}
                filterItems = {filterItems}
                value = {value}
                
      />
   </>
  );
}



export default App

