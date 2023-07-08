// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract UserDetails {

    struct Details{
        string name;
        string age;
        string dob;
        bool issue;

    }

    Details  user;
    mapping (address=> Details)  usersMapping;

    function StoreDeatails(address _userAddress,string memory _name,string memory _age,string memory _dob,bool _issue) public{
        user=Details(_name,_age,_dob,_issue);
        usersMapping[_userAddress]=user;
    }


    function SearchDetails(address _userAddress) public view returns(Details memory) {
        Details memory userData=usersMapping[_userAddress];
        return userData;
    }


}