<script setup>
import { ref } from "vue";
import VueExample from "./components/VueExample.vue";
import VueTodoList from "./components/VueTodoList.vue";

const greeting = ref("Hello from parent");
</script>
<template>
  <VueTodoList />
  <VueExample :msg="greeting">Slotted value</VueExample>
</template>
