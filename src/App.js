import styles from "./App.module.scss";
import TasksContainer from "./containers/TasksContainer";

function App() {
    return (
        <div className={styles.App}>
            <h1>Tasks</h1>
            <TasksContainer />
        </div>
    );
}

export default App;
