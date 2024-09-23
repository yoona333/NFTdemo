require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY, PUBLIC_KEY, API_URL_MATIC, MUMB_PRIVATE_KEY, MUMB_RPC_URL, MUMB_PUBLIC_KEY} = process.env;
module.exports = {
   solidity: "0.8.19",
   defaultNetwork: "matic",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      matic: {
         url: MUMB_RPC_URL,
         accounts: [`0x${MUMB_PRIVATE_KEY}`]
      },

   },
}
