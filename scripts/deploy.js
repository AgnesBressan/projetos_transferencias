const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("InternalTransfer");
  const contract = await Contract.deploy();

  await contract.waitForDeployment();

  console.log("Contrato implantado em:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
