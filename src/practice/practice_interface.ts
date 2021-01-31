export {}

interface Shape {
    getArea(): number;
}

class Circle implements Shape {

    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = width;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
// console.log(rectangle.width);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})