import { BinaryOperation } from "./BinaryOperation";

export class Addition extends BinaryOperation {
  constructor() {
    super("Soma");
  }

  protected calculate(a: number, b: number): number {
    return a + b;
  }
}
