const { ethers } = require("ethers");
require("dotenv").config({ path: "../.env" });
const fs = require("fs");

const RPC_URL = process.env.RPC_URL;
const DAI_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

const provider = new ethers.JsonRpcProvider(RPC_URL);
const dai_abi = fs.readFileSync("../dai_abi.json", "utf-8");

const contract = new ethers.Contract(DAI_ADDRESS, dai_abi, provider);

async function main() {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const balance = await contract.balanceOf(DAI_ADDRESS);
  const totalSupply = await contract.totalSupply();
  console.log("reading From: " + "DAI address -->" + DAI_ADDRESS);
  console.log("name: " + name);
  console.log("symbol: " + symbol);
  console.log("balance: " + ethers.formatEther(balance));
  console.log("totalSupply: " + totalSupply);
}

main();
