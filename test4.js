function testFunction4() {
    let numbers = [1, 2, 3, 4, 5];
    let sum = numbers.reduce((a, b) => a + b, 0);
    console.log("Сумма: " + sum);
    return sum;
}
