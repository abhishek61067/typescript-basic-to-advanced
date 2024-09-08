// generic in function
function createPair<s, t>(v1: s, v2: t): [s, t] {
  return [v1, v2];
}
console.log(createPair<string, number>("hello", 42)); // ['hello', 42]

class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: T) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value1 = new NamedValue("myNumber");
value1.setValue("10");
console.log(value1.toString()); // myNumber: 10
