<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <div class="app">
        <h3 class="title">To-Do List</h3>

        <div class="main">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style scoped>
.app {
    display: flex;
    flex-direction: column;

    margin-inline: auto;
    width: 800px;
    max-width: 100%;
    min-width: 500px;
    height: 80vh;
    padding: 2rem;
    background: #f1f5f9;
    color: #1e293b;
}

.title {
    flex-shrink: 0;
    font-size: 1.6rem;
    font-weight: 800;
    color: #334155;
    text-align: center;
    margin: 1rem 0;
    letter-spacing: 1px;
}

.main {
    flex: 1;
    min-height: 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>
