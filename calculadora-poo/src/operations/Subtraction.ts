import { BinaryOperation } from "./BinaryOperation";

export class Subtraction extends BinaryOperation {
  constructor() {
    super("Subtração");
  }

  protected calculate(a: number, b: number): number {
    return a - b;
  }
}
