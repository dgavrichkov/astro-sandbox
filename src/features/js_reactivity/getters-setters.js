let reactiveObj = {}; // создание реактивного объекта
let _value = "Hello";
let listeners = [];
let subscriberId = 0;
let subscribers = [];

// Определяем реактивное свойство
Object.defineProperty(reactiveObj, "value", {
  get() {
    return _value;
  },
  set(newValue) {
    _value = newValue;
    // уведомление подписчиков
    listeners.forEach((listener) => listener(newValue));
  },
});

// Метод для подписки на изменения
reactiveObj.subscribe = (callback) => {
  listeners.push(callback);

  // возвращаем функцию отписки
  return () => {
    const index = listeners.indexOf(callback);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
};
