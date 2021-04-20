let previous = 0;
let current = 1;
const limit = 10;
let i = 0;
const result = [previous, current];

const fibonacci = (limit) => {
  if (i < limit - 2) {
    const next = previous + current;
    result.push(next);
    previous = current;
    current = next;
    i += 1;
    fibonacci(limit);
  }
}

fibonacci(limit);
console.log(result.toString().replace(/,/g, ', '));