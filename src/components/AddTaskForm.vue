<script setup>
import { addTask } from "@/data/tasks";
const newTaskTitle = defineModel("newTaskTitle", { default: "" });
const selectedFilter = defineModel("selectedFilter");

const submit = () => {
    const title = newTaskTitle.value.trim();

    if (!title) return;
    addTask(title);
    newTaskTitle.value = "";
    selectedFilter.value = "pending";
};
</script>

<template>
    <div class="task-form">
        <form @submit.prevent="submit">
            <input
                type="text"
                v-model="newTaskTitle"
                placeholder="Add a new task..."
                required
            />

            <button type="submit">+ Add Task</button>
        </form>
    </div>
</template>

<style scoped>
.task-form {
    width: 100%;
    margin: 0 auto;
}

form {
    display: flex;
    align-items: stretch;
    gap: 10px;
    padding: 5px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    box-shadow: 0 4px 15px rgb(15 23 42 / 6%);
}

input {
    flex: 1;
    min-width: 0;
    padding: 14px 16px;
    border: none;
    outline: none;
    background: transparent;
    color: #1e293b;
    font-size: 16px;
}

input::placeholder {
    color: #94a3b8;
}

form:focus-within {
    border-color: #42b883;
    box-shadow: 0 0 0 3px rgb(66 184 131 / 15%);
}

button {
    padding: 12px 20px;
    border: none;
    border-radius: 3px;
    background: #42b883;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    transition: background 0.2s ease;
}

button:hover {
    background: #369b6e;
}

button:active {
    transform: scale(0.98);
}
</style>
