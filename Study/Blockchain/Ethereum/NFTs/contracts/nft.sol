// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../utils/address-utils.sol";
import './ERC721.sol';

contract ERC721Standard is ERC721 {
    using AddressUtils for address;

    mapping(address => uint256) balances;
    mapping(uint256 => address) owners;
    mapping(uint256 => address) approved;
    mapping(address => mapping(address => bool)) operators;

    function balanceOf(address owner) public view override returns (uint256) {
        require(owner != address(0), 'ERC721: balance query for the zero address');
        return balances[owner];
    }

    function ownerOf(uint256 tokenId) public view override returns (address) {
        address owner = owners[tokenId];
        require(owner != address(0), 'ERC721: owner query for nonexistent token');
        return owner;
    }

    function _validate(address _from, address _to, uint _tokenId) private view {
        address _owner = owners[_tokenId];
        address _approved = approved[_tokenId];
        mapping(address => bool) storage _operators = operators[_owner];

        require((_from == _owner || _from == _approved || _operators[_from]), 'ERC721: transfer must be from owner, approved address, or an approved operator');
        require((msg.sender == _owner || msg.sender == _approved || _operators[msg.sender]), 'ERC721: transfer must be from owner, approved address, or an approved operator');
        require(_owner != address(0), 'ERC721: transfer of non existent token');
        require(_to != address(0), 'ERC721: transfer for zero address');
    }

    function _transfer(address _from, address _to, uint256 _tokenId) private {
        owners[_tokenId] = _to;
        balances[_from] -= 1;
        balances[_to] += 1;

        emit Transfer(_from, _to, _tokenId);
    }

    function _safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory _data) private {
        _validate(_from, _to, _tokenId);

        _transfer(_from, _to, _tokenId);

        if (_to.isContract()) {
            // throwing an error that it doesnt exist, created a function on the util until i figure out more
            require(_to.onERC721Received(_data) == bytes4(keccak256("onERC721Received(address,uint256,bytes)")), 'ERC721: unable to recieve token');
        }
    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory _data)  external payable override {
        _safeTransferFrom(_from, _to, _tokenId, _data);
    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId)  external payable override {
        _safeTransferFrom(_from, _to, _tokenId, '');
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) external payable override {
        _validate(_from, _to, _tokenId);

        _transfer(_from, _to, _tokenId);
    }

    function approve(address _approved, uint256 _tokenId) external payable override {
        address owner = owners[_tokenId];
        require(_approved != owner, 'ERC721: owner query for approval');

        approved[_tokenId] = _approved;
        emit Approval(owner, _approved, _tokenId);
    }

    function setApprovalForAll(address _operator, bool _approved) external override {
        operators[msg.sender][_operator] = _approved;

        emit ApprovalForAll(msg.sender, _operator, _approved);
    }

    function getApproved(uint256 _tokenId) external view override returns (address) {
        return approved[_tokenId];
    }

    function isApprovedForAll(address _owner, address _operator) external view  override returns (bool) {
        return operators[_owner][_operator];
    }
}
