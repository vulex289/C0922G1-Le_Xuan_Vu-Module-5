let fibonacci = (x: number): number => {
    if (x == 1 || x == 0) {
        return 1;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2)
    }
}
let sum = (n: number): number => {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += fibonacci(i);
    }
    return total;
}
console.log(sum(5));

