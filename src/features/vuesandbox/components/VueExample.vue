<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  msg: String,
});

const pElementRef = ref(null);

onMounted(() => {
  pElementRef.value.textContent = "mounted!";
});
</script>

<template>
  <p ref="pElementRef">Hello</p>
  <p>{{ msg || "No props passed yet" }}</p>
  <div class="slot">
    <slot>Fallback content</slot>
  </div>
</template>
