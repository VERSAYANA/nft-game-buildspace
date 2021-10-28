const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Bane", "Bristleback", "Crystalmaiden"], // Names
    [
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png", // Images
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png",
    ],
    [640, 640, 560], // HP values
    [60, 55, 50], // Attack damage values
    "Roshan", // Boss name
    "https://liquipedia.net/commons/images/0/02/Roshaningame.png", // Boss image
    1000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
