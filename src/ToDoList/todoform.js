import { useState } from "react";

function ToDoListForm() {

    const [task, setTask] = useState('');
    
    const [tasksArr, setTaskArr] = useState([]);

    const changeData = (ev) => {
        setTask(ev.target.value)
    }

    const addTask = () => {
        if (!task == '') {
            setTaskArr([
                ...tasksArr,
                task
            ])
        }

        setTask('')
        // console.log(tasksArr)
    }

    const deleteTask = (taskItem) => {
        setTaskArr(tasksArr.filter((item) => item !== taskItem))
    }


    return (
        <>
            <div className="container">
                <form className="bg-primary pe-5 ps-3 py-4">
                    <label for="addTask" className="form-label ms-auto d-block">Add New To-Do</label>
                    <input type="text" onChange={(e) => changeData(e)} id="addTask" className="form-control" placeholder="Enter new task" />
                    <button type="button" onClick={() => addTask()} className="btn btn-outline-light mt-3 ms-auto d-block">Add</button>
                </form>

                <div className="List bg-secondary text-center p-5">
                    <h2>Let's get some work done!</h2>
                    <hr/>
                    {
                        tasksArr.length > 0 && (
                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <td>Task</td>
                                        <td>Delete Task</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tasksArr.map((taskItem,index) => (
                                            <tr key={index}>
                                                <td className="table-primary">{taskItem}</td>
                                                <td>
                                                    <button type="button" onClick={() => deleteTask(taskItem)} className="btn btn-outline-light">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>
        </>
    )
}


export default ToDoListForm;