// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.11.0;
contract Simplestorage{
    uint256 favoritenumber;
    struct People{
    uint256 favoritenumber;
    string name;
    }
    People[] public people;
    mapping(string =>uint256) public namefy;
   function store(uint256 fy) public {
       favoritenumber=2*fy;
   }
   function retrieve() public view returns(uint256){
       return favoritenumber;
   }
   function addperson(string memory _name,uint256 fy) public{
       people.push(People(fy,_name));
       namefy[_name]=fy;
   } 
}
