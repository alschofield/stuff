// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

library AddressUtils {
  function isContract(address _address) internal view returns (bool addressCheck) {
    uint size;
    assembly { size := extcodesize(_address) }
    return size > 0;
  }

  function onERC721Received(address _address, bytes memory _data) internal view returns (bytes4 recieved) {
    // lul
    return bytes4(keccak256("onERC721Received(address,uint256,bytes)"));
  }
}
