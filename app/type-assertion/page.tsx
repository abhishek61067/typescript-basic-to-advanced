import React from "react";
// type assertions are generally used in dom manipulation and async operation like data fetching.
// But even if you wont use type assertion, TS will automatically handle it.
// TS also checks for null itself automatically by issuing an error in editor
const TypeAssertionPage = () => {
  // type assertion
  const myCanvas1 = document.getElementById(
    "main_canvas"
  ) as HTMLElement | null;
  console.log(myCanvas1?.ATTRIBUTE_NODE);

  // In a .tsx file, there might be conflicts when using angle brackets for type assertions if the TypeScript compiler confuses it with JSX. To avoid this, you can use the as syntax for type assertions like above.
  // While in ts file, you can still use angle bracket like below:

  // const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

  return <div id="main_canvas"></div>;
};

export default TypeAssertionPage;
