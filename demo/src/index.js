var fibonacci = function (x) {
    if (x == 1 || x == 0) {
        return 1;
    }
    else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
};
var sum = function (n) {
    var total = 0;
    for (var i = 0; i < n; i++) {
        total += fibonacci(i);
    }
    return total;
};
console.log(sum(5));
