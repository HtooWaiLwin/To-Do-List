import { ref, watch } from "vue";

const key = "task_list";
const savedTasks = localStorage.getItem(key);
export const tasks = ref(savedTasks ? JSON.parse(savedTasks) : []);

let nextId =
    tasks.value.length > 0 ? Math.max(...tasks.value.map((t) => t.id)) + 1 : 1;

watch(
    tasks,
    (newTask) => {
        localStorage.setItem(key, JSON.stringify(newTask));
    },
    { deep: true },
);

export function addTask(taskTitle) {
    tasks.value.push({
        id: nextId++,
        isCompleted: false,
        title: taskTitle,
        date: new Date().toISOString().split("T")[0],
    });
}

export function completeTask(id) {
    const task = tasks.value.find((task) => task.id === id);
    if (task) {
        task.isCompleted = true;
    }
}

export function deleteTask(id) {
    tasks.value = tasks.value.filter((task) => task.id !== id);
}
