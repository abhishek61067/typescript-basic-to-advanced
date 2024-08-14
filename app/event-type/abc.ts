interface PointInterface {
  x: number;
  y: number;
}

type PointObject = {
  x: number;
  y: number;
};

const pointNormal = (x: string, y: string) =>
  console.log("function lifecycle completed successfully");

const pointObject = (point: PointObject) =>
  console.log("function lifecycle completed successfully");

const pointInterface = (point: PointInterface) =>
  console.log("function lifecycle completed successfully");

// wont work
pointNormal("", "", "");

// wont work
const point1 = { x: 3, y: 4, z: 5 };
pointObject(point1);

//   works
const point2 = { x: 3, y: 4, z: 5 };
pointInterface(point2);
