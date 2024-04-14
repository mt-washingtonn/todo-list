<script setup>
import { inject, ref } from "vue";
import CardItem from "./CardItem.vue";
defineProps({
    Tasks: Array,
    deleteTask: Function
})


</script>

<template>
    <transition-group name="card-list">

        <div v-for="Task in Tasks" :key="Task.title" v-auto-animate>
            <CardItem :title="Task.title" :body="Task.body" @delete="deleteTask" />
        </div>

    </transition-group>
</template>

<style scoped>
.card-list-enter-active,
.card-list-leave-active {
    transition: all 0.5s ease;
}

.card-list-enter-from,
.card-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>