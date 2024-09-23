// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract rockPaperScissors is ERC1155 {
    uint256 public constant Security = 1;
    uint256 public constant Bank = 2;
    uint256 public constant Fund = 3;
    uint256 public constant Account = 4;

    constructor() ERC1155("ipfs://bafybeie6yr2nulbcvommcapo6vvrwzq54xpp45ghszs7iduoscgur3vwle/{id}.json") {
        _mint(msg.sender, Bank, 10000, "");
        _mint(msg.sender, Security, 1000, "");
        _mint(msg.sender, Fund, 1000, "");
        _mint(msg.sender, Account, 1000, "");
    }
}
