pragma solidity ^0.4.2;

// Shatter Project

contract Shatter {

  mapping (bytes32 => BlockID) BlockIDs;  // BlockIDs have a bytes32 index (ethereum address)
  bytes32[] BlockIDsByAddr;               // this array allows you to look up all enteties without having to know individual use block id beforehand

  struct BlockID {
    bytes32 ethAddr;
    string handle;
    string city;
    string gender;
    string maritalStatus;
    string ageRange;
  }

  function newBlockID(bytes32 ethAddr, string handle, string city, string gender, string maritalStatus, string ageRange) returns (bool success) {
    if(BlockIDs[ethAddr].ethAddr == bytes32(0x0)) {    // don't overite existing BlockID
      BlockIDs[ethAddr].ethAddr = ethAddr;
      BlockIDs[ethAddr].handle = handle;
      BlockIDs[ethAddr].city = city;
      BlockIDs[ethAddr].gender = gender;
      BlockIDs[ethAddr].maritalStatus = maritalStatus;
      BlockIDs[ethAddr].ageRange = ageRange;
      BlockIDsByAddr.push(ethAddr);  // create record in listing
      return true;
    } else {
      return false;  // new blockID creation failed because blockID entry was not empty
    }
  }

  function getBlockIDs() constant returns (bytes32[]) { return BlockIDsByAddr; }


  function getBlockID(bytes32 ethAddr) constant returns (string, string, string, string, string) {
    return (BlockIDs[ethAddr].handle, BlockIDs[ethAddr].city, BlockIDs[ethAddr].gender, BlockIDs[ethAddr].maritalStatus, BlockIDs[ethAddr].ageRange);
  }

}
