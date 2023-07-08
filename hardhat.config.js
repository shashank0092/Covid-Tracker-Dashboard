require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/_z1q5hQmS-eiSD7aMRQ4_ZdHwDp0Kl3l",
      accounts:["2cf6416864aefd498247e0e167ca723c6241337c6812b0b8ff3c96c67c692572"]
    }
  }
};
