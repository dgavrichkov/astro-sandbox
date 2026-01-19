export function debounce(cb, delay) {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      timer = null;
      cb(args);
    }, delay);
  };
}
