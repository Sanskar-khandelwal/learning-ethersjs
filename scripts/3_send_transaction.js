const { ethers } = require("ethers");
require("dotenv").config({ path: "../.env" });

const RPC_URL = process.env.RPC_URL;
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);

const from = "0x0aab02EB1EcaD4637f87733dB910e5e95F137ED4"; //sender

const to = "0x62960C9B074BaB735BAFB574671844f67bae79Df"; //receiver

const privatekey = process.env.PRIVATE_KEY;

const wallet = new ethers.Wallet(privatekey, provider);

async function main() {
  console.log("Balance of account before transaction");
  const senderBalanceBeforetransaction = await provider.getBalance(from);
  const receiverBalanceBeforetransaction = await provider.getBalance(to);
  console.log("Before Transaction");

  console.log("sender: " + ethers.formatEther(senderBalanceBeforetransaction));
  console.log(
    "receiver: " + ethers.formatEther(receiverBalanceBeforetransaction)
  );
  //sending ether
  const tx = await wallet.sendTransaction({
    to: to,
    value: ethers.parseEther("0.025"),
  });

  await tx.wait();
  console.log(tx);

  console.log("After transaction");
  const senderBalanceAftertransaction = await provider.getBalance(from);
  const receiverBalanceAftertransaction = await provider.getBalance(to);
  console.log("After transaction");
  console.log("sender: " + ethers.formatEther(senderBalanceAftertransaction));
  console.log(
    "receiver: " + ethers.formatEther(receiverBalanceAftertransaction)
  );
}

main();
