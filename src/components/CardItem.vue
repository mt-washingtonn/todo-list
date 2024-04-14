<script setup>
import { ref, reactive } from "vue";

defineProps({
    title: String,
    body: String,
})

const isClosed = ref(false)

const emit = defineEmits(['delete'])

const complete = ref(false)

const TaskComplete = () => {
    complete.value = true
}

const deleteTask = () => {
    emit('delete')
    isClosed.value = true
}

</script>

<template>
    <div class="flex flex-col items-center" v-if="!isClosed" v-auto-animate>
        <div class=" mt-2 p-8  border-2  border-slate-300 rounded-md  min-w-64 ">
            <h1 class="font-bold bg-white rounded-md text-center">
                {{ title }}
            </h1>
            <p class="mt-2 text-wrap max-h-100 text-center">
                {{ body }}
            </p>
            <div class="mt-2 flex text-center justify-center items-center">
                <button @click="deleteTask"
                    class=" w-16 border border-slate-300 rounded-md p-2 bg-white  active:bg-slate-100 focus:outline-none focus:ring focus:ring-slate-600 ">✕</button>
            </div>
        </div>
    </div>
</template>