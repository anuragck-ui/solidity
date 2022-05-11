// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.11.0;
import "./Simplestorage.sol";
contract StorageFactory {
    Simplestorage[] public ssarray;
    function createSimple() public {
        Simplestorage simpleStorage = new Simplestorage();
        ssarray.push(simpleStorage);
    }
    function call(uint256 index,uint256 ssnumber) public{
        //need addreess of sc and abi 
        Simplestorage(address(ssarray[index])).store(ssnumber);
    }
    function rtget(uint256 index) public view returns(uint256){
       return Simplestorage(address(ssarray[index])).retrieve();
    }
}
