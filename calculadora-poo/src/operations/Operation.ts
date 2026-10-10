/**
 * Classe abstrata base de todas as operações (HERANÇA + POLIMORFISMO).
 * Cada operação concreta decide COMO calcular, mas todas são usadas
 * pela calculadora da mesma forma, através de execute().
 */
export abstract class Operation {
  // ENCAPSULAMENTO: atributos privados, acessados só por getters
  private readonly _name: string;
  private readonly _inputLabels: string[];

  protected constructor(name: string, inputLabels: string[]) {
    this._name = name;
    this._inputLabels = inputLabels;
  }

  get name(): string {
    return this._name;
  }

  /** Rótulos dos valores que o usuário deve informar (ex.: ["a", "b"]). */
  get inputLabels(): string[] {
    return [...this._inputLabels];
  }

  /** Executa a operação e devolve o resultado já formatado como texto. */
  abstract execute(values: number[]): string;
}
