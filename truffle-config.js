const HDWalletProvider = require('truffle-hdwallet-provider')
const mnemonic = "lyrics various math speak almost tonight license crash whisper flush gossip knee"
const RPC = "https://ropsten.infura.io/v3/4c85724d14d44bd0a579811c1e467d38"
module.exports = {

  plugins: ["truffle-security"],

  networks: {
    cldev: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    live: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL)
      },
      network_id: '*',
      // Necessary due to https://github.com/trufflesuite/truffle/issues/1971
      // Should be fixed in Truffle 5.0.17
      skipDryRun: true,
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(mnemonic, RPC)
      },
      network_id: '3',
      // Necessary due to https://github.com/trufflesuite/truffle/issues/1971
      // Should be fixed in Truffle 5.0.17
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
      settings: {
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    }
  }
}
