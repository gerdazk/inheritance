class Builder {
  constructor(arg) {
    this.arg = arg;
  }

  plus() {}

  minus() {}

  multiply() {}

  divide() {}

  get() {
    return this.arg;
  }
}

class IntBuilder extends Builder {
  constructor(arg) {
    super(isNaN(arg) ? 0 : +arg);
  }

  plus(...n) {
    this.arg = n.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, this.arg);
    return this;
  }

  minus(...n) {
    this.arg = n.reduce((accumulator, currentValue) => {
      return accumulator - currentValue;
    }, this.arg);
    return this;
  }

  multiply(n) {
    this.arg = n * this.arg;
    return this;
  }

  divide(n) {
    this.arg = Math.trunc(this.arg / n);
    return this;
  }

  mod(n) {
    this.arg = this.arg % n;
    return this;
  }

  static random(from, to) {
    let min = Math.ceil(from);
    let max = Math.floor(to);
    return Math.floor(Math.random() * (min - max) + max);
  }
}

function StringBuilder(arg = "") {
  this.arg = arg;
}

StringBuilder.prototype = Object.create(Builder.prototype);

StringBuilder.prototype.plus = function plus(...n) {
  for (let i = 0; i < n.length; i++) {
    this.arg += n[i];
  }
  return this;
};

StringBuilder.prototype.minus = function minus(n) {
  if (this.arg.length > n) {
    this.arg = this.arg.substring(0, this.arg.length - n);
  } else {
    this.arg = "";
  }
  return this;
};

StringBuilder.prototype.multiply = function multiply(n) {
  this.arg = this.arg.repeat(n);
  return this;
};
StringBuilder.prototype.divide = function divide(n) {
  if (this.arg.length > 0) {
    let k = Math.floor(this.arg.length / n);
    this.arg = this.arg.substring(0, k);
  }
  return this;
};

StringBuilder.prototype.remove = function remove(n) {
  if (this.arg.indexOf(n) !== -1) {
    this.arg = this.arg.split(n).join("");
  }
  return this;
};

StringBuilder.prototype.sub = function sub(from, n) {
  if (this.arg.length >= n) {
    this.arg = this.arg.substring(from, n + 1);
  } else {
    this.arg = "";
  }
  return this;
};
