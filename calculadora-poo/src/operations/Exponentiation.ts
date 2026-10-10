import { BinaryOperation } from "./BinaryOperation";

export class Exponentiation extends BinaryOperation {
  constructor() {
    super("Potenciação (a elevado a b)");
  }

  protected calculate(a: number, b: number): number {
    return Math.pow(a, b);
  }
}
