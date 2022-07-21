import styles from "./Form.module.scss";

const Form = ({ addTask }) => {
    return (
        <form id="taskForm" className={styles.Form}>
            <input id="input" type="text" placeholder="Enter a task..." />
            <select name="priority" id="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="very high">Very High</option>
            </select>
            <button onClick={addTask}>+</button>
        </form>
    );
};
export default Form;
