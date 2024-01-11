import React, {useEffect, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Popup from '../modals/Popup';
import Card from './Card';

export default function TodoList() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(()=>{
        let arr = localStorage.getItem("taskList");
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj);
        }
    },[])

    const toggle = () => setModal(!modal);

    const saveTask = (taskObj) =>{
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    }

    const deleteTask = (index) =>{
      console.log(index);
        let tempList = taskList;
        console.log(tempList)
        tempList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
         console.log(tempList)
        window.location.reload();
    }

    const updateListArray =(obj, index) =>{
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        // console.log(tempList)
        window.location.reload();

    }

    
  return (
    <div>
    <div className='header text-center'>
    <h3 className='project-name'>Todo List</h3>
    <div className='btns'>
      <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Create Task</button>
      <Dropdown className='dropdown mt-2'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        All Task
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Complete Task</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Incomplete Task</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div> 
    </div> 

    <div className='card-container'>
    {taskList && taskList.map((obj, index)=><Card key={index} taskObj= {obj} index = {index} 
    deleteTask={deleteTask} updateListArray={updateListArray} />)}
    </div>
    <Popup modal={modal} toggle={toggle} save={saveTask}/>
    </div>


  );
}
