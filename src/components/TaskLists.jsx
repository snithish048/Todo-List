import { useState } from 'react'

const TaskLists = ()=>{
    const[value, setValue] = useState('')
    const[items, setLists] = useState([])
    let length
      

    const addItem = ()=>{
      setLists(prevItems =>{
        length = prevItems.length
        return(
          [...prevItems, {id:length, item:value}]
        )
        }
      )
      setValue('')
      // console.log(items)
    }
}