export class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  addListener(eventName, fn) {
    if (typeof fn !== "function") {
      throw new Error("Listener must be a function");
    }

    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(fn);
  }

  removeListener(eventName, fn) {
    const listeners = this.events.get(eventName);
    const filtered = listeners.filter((listener) => listener !== fn);
    this.events.set(eventName, filtered);
  }

  on(eventName, fn) {
    this.addListener(eventName, fn);
  }

  remove(eventName, fn) {
    this.removeListener(eventName, fn);
  }

  once(eventName, fn) {
    const onceListener = (...args) => {
      fn(args);
      this.removeListener(eventName, onceListener);
    };

    this.addListener(eventName, onceListener);
  }

  emit(eventName, payload) {
    const listeners = this.events.get(eventName);
    if (!listeners || listeners.length === 0) {
      throw new Error("No listeners for event");
    }

    listeners.forEach((listener) => {
      listener(payload);
    });
  }

  /** удалить все слушатели события */
  removeAll(eventName) {
    this.events.set(eventName, []);
  }
}
