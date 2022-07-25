import styles from "./TasksContainer.module.scss";
import TaskCard from "../../components/TaskCard";
import Form from "../../components/Form";
import { taskData } from "./taskData.js";
import { useEffect, useState } from "react";

const TasksContainer = () => {
    const [tasks, setTasks] = useState(taskData);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

    const deleteTask = (taskToRemove) => {
        const updated = tasks.filter((t) => t.task !== taskToRemove.task);
        setTasks(updated);
    };

    const clearAllTasks = () => {
        setTasks([]);
    };

    const addTask = (e) => {
        e.preventDefault();
        let task = document.getElementById("input").value;
        let priority = document.getElementById("priority").value;
        let updated = [...tasks, ...[{ task, priority }]];
        setTasks(updated);
        document.getElementById("taskForm").reset();
    };

    const sortTasks = (tasks) => {
        const order = new Map([
            ["very high", 1],
            ["high", 2],
            ["medium", 3],
            ["low", 4],
        ]);
        let sorted = tasks.sort(
            (a, b) => order.get(a.priority) - order.get(b.priority),
        );
        return sorted;
    };

    return (
        <>
            <div className={styles.taskCount}>
                <p>You have {tasks.length} tasks...</p>
                <button onClick={clearAllTasks}>clear all tasks</button>
            </div>
            <Form addTask={addTask} />
            <div className={styles.TasksContainer}>
                {isMounted &&
                    sortTasks(tasks).map((t, i) => {
                        return (
                            <TaskCard
                                task={t}
                                deleteTask={deleteTask}
                                key={i}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default TasksContainer;
