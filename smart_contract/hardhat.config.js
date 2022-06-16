// https://eth-rinkeby.alchemyapi.io/v2/9zryQZd4rKIf4IjQ6bF640g1L8Ble_6J

require ('@nomiclabs/hardhat-waffle');

module.exports={
  solidity: '0.8.0',
  networks:{
    rinkeby: {
      url : 'https://eth-rinkeby.alchemyapi.io/v2/9zryQZd4rKIf4IjQ6bF640g1L8Ble_6J',
      accounts: ['bd53458e41259acd952e1e26c3a3b0c9f33a315968dad561d045d748726efb4c']
    }
  }
}