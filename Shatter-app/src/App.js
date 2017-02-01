import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from 'web3';
import _ from 'lodash';

var ETHEREUM_CLIENT = new web3 (new web3.providers.HttpProvider("localhost:8545"));
var ShatterABI = [{"constant":true,"inputs":[],"name":"getBlockIDs","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"ethAddr","type":"bytes32"}],"name":"getBlockID","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ethAddr","type":"bytes32"},{"name":"handle","type":"string"},{"name":"city","type":"string"},{"name":"gender","type":"string"},{"name":"maritalStatus","type":"string"},{"name":"ageRange","type":"string"}],"name":"newBlockID","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"}];
var ShatterAddress = "0x2f452ed959c83f5f8b5da01468b536ac459fed8a";
var ShatterContract = ETHEREUM_CLIENT.et.contract(ShatterABI).at(ShatterAddress);


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
