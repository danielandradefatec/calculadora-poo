import { Operation } from "./operations/Operation";

/**
 * A calculadora conhece apenas a abstração Operation (POLIMORFISMO):
 * não importa qual operação é, basta chamar execute().
 */
export class Calculator {
  private readonly operations: Operation[] = [];

  register(operation: Operation): void {
    this.operations.push(operation);
  }

  getOperations(): Operation[] {
    return [...this.operations];
  }

  getOperation(index: number): Operation | undefined {
    return this.operations[index];
  }

  calculate(operation: Operation, values: number[]): string {
    return operation.execute(values);
  }
}
