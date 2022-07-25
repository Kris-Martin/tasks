import styles from "./TaskCard.module.scss";

const TaskCard = ({ task, deleteTask }) => {
    const handleDeleteTask = () => {
        const taskToRemove = task;
        deleteTask(taskToRemove);
    };

    const currentClass = updateClass(task.priority);
    return (
        <div className={currentClass}>
            <button
                className={styles.TaskCard__button}
                onClick={handleDeleteTask}
            >
                x
            </button>
            <h2>{task.task}</h2>
            <p>{`Priority: ${task.priority}`}</p>
        </div>
    );

    function updateClass(priority) {
        let classes = styles.TaskCard;
        switch (priority) {
            case "medium":
                return (classes += " " + styles.TaskCard__medium);
            case "high":
                return (classes += " " + styles.TaskCard__high);
            case "very high":
                return (classes += " " + styles.TaskCard__very_high);
            default:
                return classes;
        }
    }
};
export default TaskCard;
