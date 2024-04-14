<script setup>
import { inject, provide, reactive, ref } from "vue";


const add = ref(false)

const addBtn = () => {
    add.value = true
}
const closeBtn = () => {
    add.value = false
}

const emit = defineEmits(['create', 'delete'])

const title = ref('')
const body = ref('')
const id = ref(Number(0))





const addTask = () => {
    id.value++
    const Task = reactive({
        id: id.value,
        title: title.value,
        body: body.value,
    })

    emit('create', Task)
}



</script>

<template>
    <header class="flex justify-center items-center p-8 border-b-2 m-6">
        <h1 class="text-4xl font-bold mr-20">to|do</h1>
        <p @click="addBtn" class="cursor-pointer">Новая задача</p>
    </header>
    <transition>
        <div class="flex flex-col items-center justify-center" v-if="add">
            <input
                class="block bg-white border border-slate-300 rounded-md py-2 px-6 sm:text-sm focus:ouline-none placeholder:text-center"
                type="text" placeholder="Название" v-model="title">
            <textarea
                class="block bg-white border border-slate-300 rounded-md sm:text-sm focus:ouline-none placeholder:text-center resize-none mt-2"
                type="text" placeholder="Описание" name="decription" id="" cols="30" rows="4" v-model="body">

        </textarea>
            <div class="mt-2">
                <button
                    class=" mr-6 w-16 border border-slate-300 rounded-md p-2 bg-white  active:bg-slate-100 focus:outline-none focus:ring focus:ring-slate-600 "
                    @click="addTask">✓</button>
                <button @click="closeBtn"
                    class=" ml-6 w-16 border border-slate-300 rounded-md p-2 bg-white  active:bg-slate-100 focus:outline-none focus:ring focus:ring-slate-600 ">✕</button>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity .5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>