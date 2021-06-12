const ERC721Standard = artifacts.require("ERC721Standard");

module.exports = function (deployer) {
  deployer.deploy(ERC721Standard);
};
