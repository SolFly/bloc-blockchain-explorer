//Remote-daemon JSON-RPC-API URL-address.
//(by default, daemon RPC using port 17898, and P2P-port 17897 to syncronize blockchain)
//Run daemon with following commands:
//./Satorid --enable-cors="*" --enable_blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=17898
//then do "port forwarding" for port 17898, get external IP, or LAN, or local IP, and use IP:PORT in next URL
var api = 'https://fastpool.xyz/bloc-exp-api/';

var donationAddress = "";
var blockTargetInterval = 120; // enter the block interval in seconds
var coinUnits = 10000;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  244000000; // enter the total supply in atomic units
var symbol = 'BLOC'; // enter the coin's ticker
var refreshDelay = 20000;

// pools stats by MainCoins
var networkStat = {
 "BLOC": [
	["FastPool.XyZ", "https://fastpool.xyz/bloc/"],
 ]
};

var networkStat2 = {
    "BLOC": [
	[""]
 ]
};
