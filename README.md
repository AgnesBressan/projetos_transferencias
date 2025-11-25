# 🔗 Aplicação Blockchain para Transferências Internas Digitais  
### SSC0958 – Criptomoedas e Blockchain  
### Universidade de São Paulo (USP)  

Este projeto implementa um **contrato inteligente em Solidity** para gerenciar **transferências internas digitais** utilizando blockchain.  
O objetivo é demonstrar como a tecnologia pode aumentar **segurança, transparência e rastreabilidade** em sistemas de pagamentos internos de instituições financeiras.

---

# 🚀 Objetivo do Projeto

A aplicação desenvolvida implementa:

- Depósitos internos simulados  
- Transferências entre contas da organização  
- Auditoria completa usando eventos  
- Contador de transações  
- Testes automatizados  
- Relatório de desempenho (gas usage)

Este repositório foi desenvolvido como parte do **Projeto II da disciplina SSC0958 – Criptomoedas e Blockchain**, ministrada pelo **Prof. Jo Ueyama**.

---

# 🧠 Motivação

Pagamentos digitais crescem rapidamente, mas muitas instituições ainda dependem de sistemas centralizados, caros e com baixa rastreabilidade.

Blockchain soluciona isso oferecendo:

- Transparência total  
- Imutabilidade  
- Auditoria automática  
- Redução de intermediários  
- Logs e eventos verificáveis  

---

# ⚙️ Arquitetura do Projeto

A aplicação utiliza:

- **Solidity 0.8.28**  
- **Hardhat 2.27**  
- **Ethers.js**  
- **Mocha + Chai** para testes  
- **Hardhat Gas Reporter**  

Estrutura:

projeto_transferencias/

│ contracts/

│ └── InternalTransfer.sol

│ scripts/

│ └── deploy.js

│ test/

│ └── internalTransfer.js

│ hardhat.config.js

│ package.json

│ README.md

# 📝 Contrato Inteligente: InternalTransfer.sol

O contrato contém:

- `mapping(address => uint256) balance`
- `deposit(amount)`
- `internalTransfer(to, amount)`
- Eventos:
  - `Deposited`
  - `TransferExecuted`
- `totalTransfers` (contador)

---

# 💻 Como rodar o projeto

## 1️⃣ Instalar dependências

```bash
npm install
```

## 2️⃣ Compilar o contrato

```bash
npx hardhat compile
```

## 3️⃣ Subir o nó local do Hardhat

```bash
npx hardhat node
```

## 4️⃣ Fazer deploy em uma nova aba

```bash
npx hardhat run scripts/deploy.js --network localhost
```

## 5️⃣ Abrir o console para interagir com o contrato

```bash
npx hardhat console --network localhost
```

## Exemplos Úteis

```js
const c = await ethers.getContractAt("InternalTransfer", "ENDERECO_DO_CONTRATO");
(await c.balance(owner.address)).toString();
await c.connect(owner).deposit(100);
await c.connect(owner).internalTransfer(user1.address, 30);
```

# 🧪 Testes Automatizados

O arquivo test/internalTransfer.js contém:
- teste de depósitos
- teste de transferências
- teste de erros (saldo insuficiente)
- teste do contador de transações

Rodar testes: 

```bash
npx hardhat test
```

Saída esperada:

4 passing

# ⚡ Desempenho (Gas Usage)

A aplicação apresenta custo baixo e previsível:
- depósito: ~45k gas
- transferência: ~74k gas
- deploy: ~450k gas

Esses dados são gerados pelo Hardhat Gas Reporter.

# 📘 Conclusão

Este projeto demonstra como o uso de blockchain em sistemas internos de pagamento permite:
- Auditoria completa
- Redução de intermediários
- Transparência total
- Execução determinística
- Custos previsíveis

Tornando a blockchain uma solução viável para transferências internas digitais.

# 👩‍💻 Autoria e Créditos

**Autora:** Agnes Bressan de Almeida

**Número USP:** 13677100

**Professor:** Jo Ueyama

**Disciplina:** SSC0958 – Criptomoedas e Blockchain

**Instituição:** ICMC — Universidade de São Paulo (USP)