import { ref } from "vue";

export const tasks = ref([]);

let nextId = 1;

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
