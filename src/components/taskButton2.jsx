// import React, { useState } from "react";
// import stl from '../styles/taskButton2.module.css';

// function Modal() {
//     const [modal, setModal] = useState(false);
  
//     const toggleModal = () => {
//       setModal(!modal);
//     };
  
//     if(modal) {
//       document.body.classList.add('active-modal')
//     } else {
//       document.body.classList.remove('active-modal')
//     }
  
//     return (
//       <>
//         <button className = {stl.btn} onclick='Modal()' type='button'>Add Task</button>
  
//         {modal && (
//           <div className="modal">
//             <div onClick={toggleModal} className="overlay"></div>
//             <div className="modal-content">
//               <h2>Hello Modal</h2>
//               <p>Lorem </p>
//               <button className="close-modal" onClick={toggleModal}>
//                 CLOSE
//               </button>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   }


// export default Modal