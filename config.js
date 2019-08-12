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
	["pool.dego.semipool.com", "https://pool.dego.semipool.com:8117"],
	["dyngepeng.zapto.org", "http://dyngepeng.zapto.org:8117"],
	["fastpool.xyz", "http://fastpool.xyz:8117"],
	["degopool.tk", "http://degopool.tk:8117"],
	["tubomine.co", "http://turbomine.co:8117"],
	["pool.stx.nl", "http://pool.stx.nl:8117"],
 ]
};

var networkStat2 = {
    "dego": [
	[""]
 ]
};
