export interface DebouncedFunction<
  Args extends any[],
  F extends (...args: Args) => any
> {
  (this: ThisParameterType<F>, ...args: Args & Parameters<F>): void;
}

export function debounce<Args extends any[], F extends (...args: Args) => any>(
  func: F,
  timeout = 300
): DebouncedFunction<Args, F> {
  let timer: any;

  const debouncedFunction = function (
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };

  return debouncedFunction;
}
