# Challenge - Deleting tasks

## MVP

```
const taskData = [
    {
        task: "Clean the bathroom",
        priority: "low"
    },
    {
        task: "Walk the dog",
        priority: "high"
    },
    {
        task: "Do codewars",
        priority: "very high"
    },
    {
        task: "Cook dinner",
        priority: "medium"
    },
];
```

-   Create a component called TaskCard that will contain the task name, task priority and a delete button.

-   Render a TaskCard for each of the task objects from the taskData array.

-   When a delete button is clicked, the TaskCard that contains that button should disappear from the page.

-   Remember that state should be managed in the container component
