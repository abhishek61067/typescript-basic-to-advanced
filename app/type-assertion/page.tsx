// type assertion
const myCanvas1 = document.getElementById("main_canvas") as HTMLCanvasElement;

// In a .tsx file, there might be conflicts when using angle brackets for type assertions if the TypeScript compiler confuses it with JSX. To avoid this, you can use the as syntax for type assertions like above
// While in ts file, you can still use angle bracket

// const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

const x = "hello" as any as number;
