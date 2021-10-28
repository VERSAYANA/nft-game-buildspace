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
