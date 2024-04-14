<script setup>
import { ref, provide, reactive, inject, onMounted } from "vue";
import AppHeader from "./components/AppHeader.vue";
import CardList from "./components/CardList.vue"

const Tasks = ref([])

const addTask = (Task) => {
  Tasks.value.push(Task)
  localStorage.setItem('Tasks', JSON.stringify(Tasks.value))
}

onMounted(async () => {
  const data = await localStorage.getItem('Tasks')
  if (data) {
    Tasks.value = JSON.parse(data)
  }
})


const deleteTask = () => {
  Tasks.value.splice(Tasks.value.id, 1)
  localStorage.setItem('Tasks', JSON.stringify(Tasks.value))
}

</script>

<template>
  <AppHeader @create="addTask" />
  <CardList :Tasks="Tasks" :deleteTask="deleteTask" />
</template>
