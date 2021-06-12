// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

import 'truffle/Assert.sol';
import 'truffle/DeployedAddresses.sol';
import '../contracts/nft.sol';

contract TestERC721 {
  function testInitialBalanceUsingDeployedContract() public {
    ERC721Standard meta = ERC721Standard(DeployedAddresses.ERC721Standard());

    Assert.equal(meta.balanceOf(tx.origin), 0, 'Owner should have 0 NFT initially');
  }

  function testInitialBalanceWithNewERC721Standard() public {
    ERC721Standard meta = new ERC721Standard();

    Assert.equal(meta.balanceOf(tx.origin), 0, 'Owner should have 0 NFT initially');
  }

  function testForNonExistentOwner() public {
    bool r;

    ERC721Standard meta = new ERC721Standard();

    // trying to figure out how to debug errors and these contracts in general
    // goodnight
    (r, ) = address(this).call(abi.encodePacked(meta.ownerOf(1)));

    Assert.isFalse(r, 'token should not exist');
  }
}
