import React, {useState} from 'react';
import btn from '../styles/Buttons.module.css'


const FilterButton = (props) => {

 const handleChange = (event) => {
   props.filterItems(event.target.value)
  };

 return (

   <div>  

       <select className={btn.filterButton} value={props.value} onChange={handleChange}>
         <option value="all">All</option>
         <option value="Incomplete">Incomplete</option>
         <option value="Completed">Complete</option>
       </select>

   </div>

 );

};

export default FilterButton;