import { BinaryOperation } from "./BinaryOperation";

export class Radication extends BinaryOperation {
  constructor() {
    super("Radiciação (raiz de índice b de a)");
  }

  protected calculate(a: number, b: number): number {
    if (b === 0) {
      throw new Error("O índice da raiz não pode ser zero.");
    }
    if (a < 0 && b % 2 === 0) {
      throw new Error("Não existe raiz de índice par de número negativo (nos reais).");
    }
    // Raiz de índice ímpar de negativo: -(|a|^(1/b))
    if (a < 0) {
      return -Math.pow(-a, 1 / b);
    }
    return Math.pow(a, 1 / b);
  }
}
