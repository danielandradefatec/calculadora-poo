import { Operation } from "./Operation";

/**
 * Parte 2: raízes de uma função do 2º grau (ax² + bx + c = 0).
 * Herda de Operation, mas recebe TRÊS valores em vez de dois.
 */
export class Bhaskara extends Operation {
  constructor() {
    super("Equação do 2º grau (Bhaskara)", [
      "coeficiente a",
      "coeficiente b",
      "coeficiente c",
    ]);
  }

  execute(values: number[]): string {
    const [a, b, c] = values;

    if (a === 0) {
      throw new Error("O coeficiente 'a' não pode ser zero (não é uma equação do 2º grau).");
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
      return `Delta = ${delta}. Não há raízes reais.`;
    }
    if (delta === 0) {
      const x = -b / (2 * a);
      return `Delta = 0. Uma raiz real: x = ${x}`;
    }

    const sqrtDelta = Math.sqrt(delta);
    const x1 = (-b + sqrtDelta) / (2 * a);
    const x2 = (-b - sqrtDelta) / (2 * a);
    return `Delta = ${delta}. Duas raízes reais: x1 = ${x1} e x2 = ${x2}`;
  }
}
