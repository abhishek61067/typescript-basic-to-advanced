// For reference:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference

declare function handleRequest(url: string, method: "GET" | "POST"): void;

// by default type inference
const req = { url: "https://example.com", method: "GET" };

//when working with literal types, you cant directly assign the object to the literal type
// because by default everything in ts are type inference
handleRequest(req.url, req.method);
handleRequest("https://example.com", "GET");

// solution
// literal inference
const req1 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req1.url, req1.method);
//OR
handleRequest(req.url, req.method as "GET");
//OR
const req2 = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req2.url, req2.method);
