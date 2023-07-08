const hre = require("hardhat");

async function main() {


  const UserDetails = await hre.ethers.deployContract("UserDetails");

  await UserDetails.waitForDeployment();

  console.log(
    `UserDetails Contract deployed to ${UserDetails.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode=1;
});