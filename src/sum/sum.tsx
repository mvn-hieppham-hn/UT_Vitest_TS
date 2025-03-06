export function sum(a: number, b: number) {
  return a + b;
}

export function sumOfSquares(k: number) {
  let sumOfSquares = 0;
  for (let i = 0; i < k + 1; i++) {
    sumOfSquares += i * i;
  }
  console.log("sumOfSquares:", sumOfSquares);
  return sumOfSquares;
}

export const factorial = (k: number) => {
  let factorialValue = 1;
  if (k === 0) {
    return 1;
  }
  for (let i = 1; i < k; i++) {
    factorialValue = factorialValue * i;
  }
  return factorialValue;
};

export const sumFactorial = (k: number) => {
  let sumFactorial = 0;
  if (k === 0) {
    return 1;
  }
  for (let i = 1; i <= k; i++) {
    sumFactorial += factorial(i);
  }
  return sumFactorial;
};

export const renderHTML = (html: string) => {
  return <h1>{html}</h1>;
};
