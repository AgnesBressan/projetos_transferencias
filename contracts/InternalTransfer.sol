// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract InternalTransfer {

    mapping(address => uint256) public balance;
    uint256 public totalTransfers;

    event Deposited(address indexed user, uint256 amount);
    event TransferExecuted(address indexed from, address indexed to, uint256 amount);

    function deposit(uint256 amount) public {
        balance[msg.sender] += amount;
        emit Deposited(msg.sender, amount);
    }

    function internalTransfer(address to, uint256 amount) public {
        require(balance[msg.sender] >= amount, "Saldo insuficiente");
        require(msg.sender != to, "Nao pode transferir para si mesmo");

        balance[msg.sender] -= amount;
        balance[to] += amount;

        totalTransfers++;

        emit TransferExecuted(msg.sender, to, amount);
    }
}
