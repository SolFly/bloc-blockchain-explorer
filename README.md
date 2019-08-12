
# DeroGold Blockchain Explorer
Block explorer for DeroGold CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon turtlecoind. It should be accessible from the Internet. Run turtlecoind with open port as follows:
```bash
./DeroGoldd --enable-cors="*" --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=6969
```
2) Upload to your website and change 'api' variable in config.js to point to your daemon.
3} Configure config.php to access JSON API. Requires pre-reqs: php, php-curl and libapache2-mod-php (if running Apache2)


### Development

DeroGold Developers, TurtleCoin Developers. 


Devs:
    @devopsralf

Donate: [TRTL] TRTLv2RCPuD7AaaVpQkRPF59MMLx5WW3qFxwJz4Doy7dHhNA6UuQjEpLL3rpUQS4RXdQn8fb4P1XC3K62GeJjGgG8DP9LNaTrNL

    @LeoCuvée

Donate: [DEGO] dg47xN74St6btXZUDo96NW7G62djERbst3eFuiQCaMo1AADep62Siqu3vmnDcc3tFXf1wgnVKvGwD1eyYZqYBhrB2ChcBtGJL

### Note

This code is based on the Karbovanets/Karbowanec-Blockchain-Explorer
