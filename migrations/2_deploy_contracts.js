var FTokenCoin = artifacts.require('FTokenCoin')

module.exports = function (deployer, network, accounts) {
  deployer.deploy(FTokenCoin)
}
