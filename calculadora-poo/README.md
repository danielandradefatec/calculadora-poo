# Calculadora POO (TypeScript)

Calculadora de linha de comando para praticar **herança, encapsulamento, polimorfismo e criação de objetos**.

## Operações
- Soma, subtração, divisão, potenciação, radiciação (sempre com dois números)
- Raízes de equação do 2º grau (Bhaskara) com os coeficientes a, b e c

## Como rodar
```bash
npm install
npm start
```
Ou compilando: `npm run build && npm run start:build`

## Estrutura
```
src/
├── index.ts                  # menu CLI (readline)
├── Calculator.ts             # registra e executa operações
└── operations/
    ├── Operation.ts          # classe abstrata base
    ├── BinaryOperation.ts    # operações com dois números
    ├── Addition.ts, Subtraction.ts, Division.ts,
    │   Exponentiation.ts, Radication.ts
    └── Bhaskara.ts           # equação do 2º grau
```
