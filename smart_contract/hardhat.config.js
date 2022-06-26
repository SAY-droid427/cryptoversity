require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.7.0',
  networks: {
    goerli: {
      url:"https://eth-goerli.alchemyapi.io/v2/mo1-_rHgDFRJ6hrhFD4zlJTiUcFyS6ek",
      accounts:['e665daead2bd64790c3228ab105cb871a03efff3d5896bd2d8f067f39c81c8c1']
    }
  }
}
