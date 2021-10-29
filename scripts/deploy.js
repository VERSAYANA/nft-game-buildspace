const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");

  const gameContract = await gameContractFactory.deploy(
    ["Bane", "Drow Ranger", "Juggernaut"], // Names
    [
      "QmUNdBnhtiwR6cgycW6Csi2xG2FhnKWFqhZXTnsVKExykG", // Images
      "QmZWQ1w7f3dKWQMzWzQ6SfSLVZ8rJBwixS6Z2Jy5MBDia1",
      "QmVVzQvWM4cSfXrgRHQ2ZgN56w4wEbYzFkhsFH59nSZJSb",
    ],
    [990, 1100, 1200], // HP values
    [60, 55, 50], // Attack damage values
    "Roshan", // Boss name
    "Qmc8w7taHQx4nr82qfJdQuwJuZNRjwxuQPfV8uNEAoLPkT", // Boss image
    20000, // Boss hp
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
