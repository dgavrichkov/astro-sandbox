import { signal, computed, effect } from "./signal";

export function setupSignalsCounter() {
  const container = document.getElementById("counter-container");
  const incrementBtn = document.getElementById("increment-btn");
  const decrementBtn = document.getElementById("decrement-btn");

  const counter = signal(0);
  const double = computed(() => counter.value * 2);

  effect(() => {
    container.innerHTML = counter.value;
    // console.log отчего то показывается дважды. Возможно, что-то не то в реализации сигнала...
    console.log("Double counter", double.value);
  });

  incrementBtn.addEventListener("click", () => counter.value++);

  decrementBtn.addEventListener("click", () => counter.value--);
}
