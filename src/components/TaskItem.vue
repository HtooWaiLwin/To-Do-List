<script setup>
defineProps({
    task: {
        required: true,
        type: Object,
    },
});

defineEmits(["complete", "delete"]);
</script>

<template>
    <div class="task">
        <div class="task-info">
            <h3 :class="{ completed: task.isCompleted }">
                {{ task.title }}
            </h3>
            <p class="task-date">{{ task.date }}</p>
        </div>

        <span class="priority" :class="task.priority">
            {{ task.priority }}
        </span>

        <div class="actions">
            <button
                v-if="!task.isCompleted"
                class="complete-btn"
                @click="$emit('complete', task.id)"
            >
                ✓ Complete
            </button>

            <button class="delete-btn" @click="$emit('delete', task.id)">
                Delete
            </button>
        </div>
    </div>
</template>

<style scoped>
.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    background: #ffffff;
    margin-top: 10px;
    padding: 18px 22px;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(15 23 42 / 5%);
    transition:
        box-shadow 0.2s ease,
        transform 0.2s ease;
}

.task:hover {
    box-shadow: 0 5px 16px rgb(15 23 42 / 9%);
    transform: translateY(-2px);
}

.task-info {
    flex: 1;
    min-width: 0;
}

.task-info h3 {
    margin: 0 0 6px;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
    overflow-wrap: anywhere;
}

.task-date {
    margin: 0;
    color: #94a3b8;
    font-size: 13px;
}

.completed {
    color: #94a3b8 !important;
    text-decoration: line-through;
}

.actions {
    display: flex;
    align-items: center;
    gap: 8px;
}

button {
    padding: 8px 12px;
    border: none;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s ease;
    white-space: nowrap;
}

.complete-btn {
    background: #dcfce7;
    color: #15803d;
}

.complete-btn:hover {
    background: #bbf7d0;
}

.delete-btn {
    background: #fee2e2;
    color: #dc2626;
}

.delete-btn:hover {
    background: #fecaca;
}
</style>
