/** Простая реализация паттерна Observer */
export class Observable {
  /** храним список подписчиков */
  subscribers = new Set();

  constructor(initialValue) {
    this.value = initialValue;
  }

  subscribe = (fn) => {
    this.subscribers.add(fn);

    // некий clean-up
    return () => this.unsubscribe(fn);
  };

  unsubscribe = (fn) => {
    this.subscribers.delete(fn);
  };

  notify = (data) => {
    this.subscribers.forEach((subsFn) => subsFn(data));
  };
}
