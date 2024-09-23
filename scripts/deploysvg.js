async function main() {
  const svgNFT = await ethers.getContractFactory("EternalNFT")
  const mNFT = await svgNFT.deploy()
  await mNFT.deployed()
  console.log("Contract deployed to address:", mNFT.address)

  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  