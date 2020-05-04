class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    this.sides.reduce(function (sum, num) {
      return sum + num;
    });
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides == 3) {
      let a = this.sides[0];
      let b = this.sides[1];
      let c = this.sides[2];
      return a + b > c && b + c > a && c + a > b;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides == 4) {
      let a = this.sides[0];
      let b = this.sides[1];
      let c = this.sides[2];
      let d = this.sides[3];
      return a === b && a === c && a == d;
    }
  }

  get area() {
    return Math.pow(this.sides[0], 2);
  }
}
