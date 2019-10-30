var api = 'http://cuveedego.czech.cloud:6969';
var donationAddress = "";
var blockTargetInterval = 20; // enter the block interval in seconds
var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  10000000000000000; // enter the total supply in atomic units
var symbol = 'dego'; // enter the coin's ticker
var refreshDelay = 20000;

// pools stats by MainCoins
var networkStat = {
 "dego": [
	["pool.dego.semipool.com", "https://pool.dego.semipool.com:33301"],
	["fastpool.xyz", "http://fastpool.xyz:3333"],
	["publicnode.ydns.eu", "http://publicnode.ydns.eu:5420"],
 ]
};

var networkStat2 = {
    "dego": [
	[""]
 ]
};
