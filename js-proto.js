function MathCalculator(a, b) {
    this.a = a;
    this.b = b;
    this.add = function () {
        return this.a + this.b;
    }
    this.divide = function () {
        if (!this.b)
            return 'b can\'t be zero or null or undefined';
        return this.a / this.b;
    }
}

MathCalculator.prototype.sub = function () {
    return this.a - this.b;
}

MathCalculator.prototype.multiply = function () {
    return this.a * this.b;
}

MathCalculator.prototype.Name = 'Hello Name';

let calculator = new MathCalculator(5, 6);
console.log(calculator.add())
console.log(calculator.divide())
console.log(calculator.multiply())
console.log(calculator.sub());
console.log(calculator.Name);


