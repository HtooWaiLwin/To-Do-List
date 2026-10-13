<script setup>
import TaskItem from "@/components/TaskItem.vue";
import AddTaskForm from "@/components/AddTaskForm.vue";
import { tasks, completeTask, deleteTask } from "@/data/tasks.js";
import { ref, computed } from "vue";

const newTaskTitle = ref("");
const selectedFilter = ref("pending");

const filteredTasks = computed(() => {
    if (selectedFilter.value === "pending") {
        return tasks.value.filter((task) => !task.isCompleted);
    }

    if (selectedFilter.value === "completed") {
        return tasks.value.filter((task) => task.isCompleted);
    }

    return tasks.value;
});
</script>

<template>
    <div class="home">
        <div class="task-controls">
            <div class="add-task-form">
                <AddTaskForm
                    v-model:new-task-title="newTaskTitle"
                    v-model:selected-filter="selectedFilter"
                />
            </div>

            <div class="filter-control">
                <select id="task-filter" v-model="selectedFilter">
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </div>

        <div v-if="filteredTasks.length === 0" class="empty-state">
            <div class="empty-icon">✓</div>

            <h2>
                {{
                    selectedFilter === "completed"
                        ? "No Completed Tasks!"
                        : selectedFilter === "pending"
                          ? "No Pending Tasks!"
                          : "No Task Yet!"
                }}
            </h2>

            <p>
                {{ selectedFilter === "all" ? "Add a new task above." : "" }}
            </p>
        </div>

        <div v-else class="task-list">
            <TaskItem
                v-for="task in filteredTasks"
                :key="task.id"
                :task="task"
                @complete="completeTask(task.id)"
                @delete="deleteTask(task.id)"
            />
        </div>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.task-controls {
    display: flex;
    align-items: end;
    gap: 12px;
    width: 100%;
}

.add-task-form {
    flex: 1;
    min-width: 0;
}

.task-controls {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    width: 100%;
}

.add-task-form {
    width: 100%;
    min-width: 0;
}

.filter-control {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
}

.filter-control select {
    min-width: 125px;
    padding: 12px 30px 12px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 5px;
    background: #ffffff;
    color: #707172;
    font-size: 14px;
    cursor: pointer;
    outline: none;
}

.filter-control select:focus {
    border-color: #16a34a;
    box-shadow: 0 0 0 3px #dcfce7;
}

.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
    padding: 55px 25px;
    background: #ffffff;
    border: 1px dashed #cbd5e1;
    border-radius: 16px;
    height: 100%;
    flex: 1;
}

.empty-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin-bottom: 18px;
    background: #dcfce7;
    color: #16a34a;
    border-radius: 50%;
    font-size: 32px;
    font-weight: bold;
}

.empty-state h2 {
    margin: 0 0 10px;
    color: #1e293b;
    font-size: 23px;
    font-weight: 700;
}

.empty-state p {
    max-width: 350px;
    margin: 0;
    color: #64748b;
    font-size: 15px;
    line-height: 1.7;
}

.task-list {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
}

.task-list::-webkit-scrollbar {
    width: 8px;
}
</style>
