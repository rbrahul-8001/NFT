async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//0x4fd965ce41d04915981d9dd5e09d0bca5935710c
// 0x69BA35c8358A66b92D6128A89C5A8f56D33e816d
