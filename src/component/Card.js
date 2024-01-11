import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import Checkbox from './Checkbox';
export default function Card({taskObj, index, deleteTask, updateListArray}) {

    const [modal, setModal] = useState(false);
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () =>{
        setModal(!modal);
    }

    const handleDelete = () =>{
        
        deleteTask(index);
    }

    const updateTask = (obj) =>{
        updateListArray(obj, index);

    }
  return (
    <div className = "card-wrapper" key="">

            <div className = "card-top" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"backgroundColor": colors[index%5].secondaryColor, "borderRadius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div className="edit-check-delete" style={{"position": "absolute", "right" : "5px", "bottom" : "7px"}}>
                <Checkbox/>
                    <i className = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer", "margin":"5px"}} onClick={()=> setModal(true)}></i>
                    <i className ="fas fa-trash-alt mr-3" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer", "margin":"5px"}} 
                    onClick={handleDelete}></i>
                    
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        
        </div>
  );
}

