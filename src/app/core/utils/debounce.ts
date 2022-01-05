declare var clearTimeout: any;
declare var setTimeout: any;

export function debounce(func: any, timeout = 300) {
  let timer: any;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      func.apply(this as any, args);
    }, timeout);
  };
}
