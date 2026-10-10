import { Operation } from "./Operation";

/**
 * Operação sempre feita sobre DOIS números.
 * As subclasses só precisam implementar calculate(a, b).
 */
export abstract class BinaryOperation extends Operation {
  protected constructor(name: string) {
    super(name, ["primeiro número", "segundo número"]);
  }

  protected abstract calculate(a: number, b: number): number;

  execute(values: number[]): string {
    const [a, b] = values;
    return `Resultado: ${this.calculate(a, b)}`;
  }
}
