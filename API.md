# Public Rest API for BitcoinGreen Node

    api prefix: /api/v1

# Summary
[Get server status](#get-server-status)  
[Get rpc status](#get-rpc-status)  

***

# Utility APIs


## Get server status
```
 GET /monitor
```

* for successed case

status: 200
```javascript
{
    "result": "ok",
    "message": "Server is running now !"
}
```

* for failed case

status: 400


## Get rpc status
```
 GET /monitor/rpc
```

* for successed case

status: 200
```javascript
{
    "result": "ok",
    "data": {
        "version": 1030003,
        "protocolversion": 70914,
        "walletversion": 61000,
        "balance": 0,
        "blocks": 464940,
        "timeoffset": 0,
        "connections": 16,
        "proxy": "",
        "difficulty": 15994.18222985227,
        "testnet": false,
        "moneysupply": 6296183.41102826,
        "keypoololdest": 1544943954,
        "keypoolsize": 1001,
        "paytxfee": 0,
        "relayfee": 0.0001,
        "staking status": "Staking Not Active",
        "errors": ""
    }
}
```

* for failed case

status: 400
```javascript
{
    "result": "error",
    "message": "RPC provider is not working"
}
```
