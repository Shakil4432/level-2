class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  area(): number {
    return this.height * this.width;
  }
}

const calculateShape = (value: Shape) => {
  console.log(value.area());
};

const radius = new Shape();
const rectangle = new Rectangle(20, 30);
const circle = new Circle(40);

calculateShape(radius);
calculateShape(rectangle);
calculateShape(circle);
