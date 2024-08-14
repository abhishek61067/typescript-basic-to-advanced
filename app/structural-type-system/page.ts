interface pointsInterface {
  x: number;
  y: number;
}

type pointsObject = {
  x: number;
  y: number;
};

const pointsNormal = (x: string, y: string) =>
  console.log("function lifecycle completed successfully");

const pointsObject = (points: pointsObject) =>
  console.log("function lifecycle completed successfully");

const pointsInterface = (points: pointsInterface) =>
  console.log("function lifecycle completed successfully");

// wont work
pointsNormal("", "", "");

// wont work
const points1 = { x: 3, y: 4, z: 5 };
pointsObject(points1);

//   works
const points2 = { x: 3, y: 4, z: 5 };
pointsInterface(points2);
