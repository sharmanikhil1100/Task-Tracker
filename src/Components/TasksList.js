import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'semantic-ui-react'
import TaskBox from "./TaskBox"

const TasksList = ({headerTitle}) => {
    let taskCount = 1
    
    function addTask({title, description}) {
        let tasksList = document.getElementById("tasksInList"+headerTitle)
        let nodeElement = document.createElement("div")
        let task = <TaskBox title={title} description={description} headerTitle={headerTitle} taskCount={taskCount}/>
        
        nodeElement.setAttribute("id", "taskNo"+headerTitle+taskCount)

        console.log("In add button")
        if(tasksList && tasksList.hasChildNodes())
        {
            tasksList.appendChild(nodeElement)
            ReactDOM.render(task, document.getElementById("taskNo"+headerTitle+taskCount))
            taskCount++    
        }
    }

    return (
        <div className="tasksList">
            <div className="listHeader">
                {headerTitle}
            </div>
            <div id={"tasksInList"+headerTitle}>
                <TaskBox title="Task1" description="Some text here" headerTitle={headerTitle} taskCount={taskCount++}/>
            </div>
            <Button icon onClick={() => addTask({title:"<Title>", description:"Add some text here"})}> 
                <Icon name='add' aria-hidden='false' size='small'/>
            </Button>
        </div>
    )
}

export default TasksList