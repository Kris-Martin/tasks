import styles from "./TasksContainer.module.scss";
import TaskCard from "../../components/TaskCard";
import { taskData } from "./taskData.js";
import { useState } from "react";

const TasksContainer = () => {
    const [tasks, setTasks] = useState(taskData);

    const deleteTask = (taskToRemove, tasks) => {
        let updated = tasks.filter((task) => task.task !== taskToRemove);
        setTasks(updated);
    };
    console.log(tasks);
    return (
        <div className={styles.TasksContainer}>
            <TaskCard tasks={tasks} deleteTask={deleteTask} />
            {/* <button className={styles.Buttons}>Add Task</button>
            <button className={styles.Buttons}>Clear All</button> */}
        </div>
    );
};

export default TasksContainer;
