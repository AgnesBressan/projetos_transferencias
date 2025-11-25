const { expect } = require("chai");

describe("InternalTransfer", function () {

  let Contract, contract, owner, user1, user2;

  beforeEach(async function () {
    Contract = await ethers.getContractFactory("InternalTransfer");
    contract = await Contract.deploy();
    [owner, user1, user2] = await ethers.getSigners();
  });

  it("Deve permitir depósitos", async function () {
    await contract.connect(owner).deposit(100);
    expect(await contract.balance(owner.address)).to.equal(100);
  });

  it("Deve transferir internamente", async function () {
    await contract.connect(owner).deposit(100);
    await contract.connect(owner).internalTransfer(user1.address, 30);

    expect(await contract.balance(owner.address)).to.equal(70);
    expect(await contract.balance(user1.address)).to.equal(30);
  });

  it("Não deve transferir sem saldo suficiente", async function () {
    await expect(
      contract.connect(owner).internalTransfer(user1.address, 10)
    ).to.be.revertedWith("Saldo insuficiente");
  });

  it("Deve incrementar contador de transações", async function () {
    await contract.connect(owner).deposit(200);
    await contract.connect(owner).internalTransfer(user1.address, 50);

    expect(await contract.totalTransfers()).to.equal(1);
  });

});
