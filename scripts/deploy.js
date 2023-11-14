const hre = require("hardhat");

async function main() {
  const auction = await hre.ethers.getContractFactory("auction");
  const contract = await auction.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

