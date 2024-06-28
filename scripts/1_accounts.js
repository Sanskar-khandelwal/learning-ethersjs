const { ethers } = require("ethers");
require("dotenv").config({ path: "../.env" });

const RPC_URL = process.env.RPC_URL;
const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

const provider = new ethers.JsonRpcProvider(RPC_URL);

async function main() {
  const balance = await provider.getBalance(address);
  console.log(
    "ETH balance of " + address + "-->" + ethers.formatEther(balance) + "ETH"
  );
}

main();
