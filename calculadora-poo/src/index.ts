import * as readline from "readline";
import { Calculator } from "./Calculator";
import { Addition } from "./operations/Addition";
import { Subtraction } from "./operations/Subtraction";
import { Division } from "./operations/Division";
import { Exponentiation } from "./operations/Exponentiation";
import { Radication } from "./operations/Radication";
import { Bhaskara } from "./operations/Bhaskara";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function askNumber(label: string): Promise<number> {
  while (true) {
    const answer = (await ask(`Informe o ${label}: `)).trim().replace(",", ".");
    const value = Number(answer);
    if (answer !== "" && !Number.isNaN(value)) {
      return value;
    }
    console.log("Valor inválido. Digite um número.");
  }
}

async function main(): Promise<void> {
  const calculator = new Calculator();
  calculator.register(new Addition());
  calculator.register(new Subtraction());
  calculator.register(new Division());
  calculator.register(new Exponentiation());
  calculator.register(new Radication());
  calculator.register(new Bhaskara());

  console.log("=== Calculadora POO (TypeScript) ===");

  let running = true;
  while (running) {
    console.log("\nEscolha uma operação:");
    calculator.getOperations().forEach((op, i) => {
      console.log(`  ${i + 1} - ${op.name}`);
    });
    console.log("  0 - Sair");

    const choice = (await ask("Opção: ")).trim();

    if (choice === "0") {
      running = false;
      continue;
    }

    const operation = calculator.getOperation(Number(choice) - 1);
    if (!operation) {
      console.log("Opção inválida.");
      continue;
    }

    const values: number[] = [];
    for (const label of operation.inputLabels) {
      values.push(await askNumber(label));
    }

    try {
      console.log(calculator.calculate(operation, values));
    } catch (error) {
      console.log(`Erro: ${(error as Error).message}`);
    }
  }

  console.log("Até logo!");
  rl.close();
}

main();
