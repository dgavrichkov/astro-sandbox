let currentEffect = null;

export const signal = (initialValue) => {
  const subscribers = new Set();
  let value = initialValue;

  return {
    get value() {
      // попали сюда из эффекта, и регистрируем подписчика
      if (currentEffect) {
        subscribers.add(currentEffect);
      }
      return value;
    },
    set value(newValue) {
      if (newValue === value) return;

      value = newValue;
      // когда кто-то использует сеттер, оповещаем подписчиков об изменениях
      subscribers.forEach((sub) => sub());
    },
  };
};

export const effect = (fn) => {
  currentEffect = fn;
  // поскольку внутри fn будет происходить обращение к геттеру сигнала, мы попадем прям в исполнение геттера
  fn();
  currentEffect = null;
};

export const computed = (fn) => {
  const computed = signal();

  effect(() => {
    computed.value = fn();
  });

  return computed;
};
