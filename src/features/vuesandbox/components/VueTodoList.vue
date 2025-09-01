<script setup>
import { computed, ref, watch } from "vue";

const count = ref(0);

const message = ref("Hello World!");
const dynId = ref("title");
const titleClass = ref("title");
const hideCompleted = ref(false);
const text = ref("initial text");

const awesome = ref(true);
// give each todo a unique id
let id = 0;
const newTodo = ref("");
const todos = ref([
  { id: id++, text: "Learn HTML" },
  { id: id++, text: "Learn JavaScript" },
  { id: id++, text: "Learn Vue" },
]);

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});

function toggle() {
  awesome.value = !awesome.value;
}

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value });
  newTodo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}

watch(count, (newCount) => {
  // yes, console.log() is a side effect
  console.log(`new count is: ${newCount}`);
});
</script>

<template>
  <div class="block">
    <h1 :class="titleClass" :id="dynId">{{ message }}</h1>
    <div></div>
    <p>Count is: {{ count }}</p>
    <button @click="count++">Add 1</button>
    <form>
      <input v-model="text" />
    </form>
  </div>
  <div class="block">
    <button @click="toggle">Toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
  <div class="block">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" required placeholder="new todo" />
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "Show all" : "Hide completed" }}
    </button>
  </div>
</template>

<style>
.title {
  color: red;
}

.block {
  margin: 12px 0;
  padding: 12px;
  border: 2px solid #000;
  border-radius: 14px;
}

.done {
  text-decoration: line-through;
}
</style>
