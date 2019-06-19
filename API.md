# Public Rest API for BitGreen Node

    api prefix: /api/v1

# Summary
[Get server status](#get-server-status)
[Get rpc status](#get-rpc-status)
[Get address balance](#get-address-balance)
[Get address unspent](#get-address-unspent)
[Send raw transaction](#send-raw-transaction)

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

## Get address balance

```
 GET /rpc/getbalance
```

### Params

address

* for successed case

status: 200

```javascript
{
    "result": "ok"
    "data": [
        "address": balance
    ]
}
```

* for failed case

status: 500
```javascript
{
    "result": "error",
    "message": err_msg
}
```

## Get address unspent

```
 GET /rpc/getunspent
```

### Params

address

* for successed case

status: 200

```javascript
{
    "result": "ok"
    "data": [
        "address": address,
        "txid": tx_hash,
        "vout": vout_idx,
        "value": amount,
        "time": time
    ]
}
```

* for failed case

status: 500
```javascript
{
    "result": "error",
    "message": err_msg
}
```


## Send raw transaction
```
 POST /rpc/sendrawtransaction
```

### BODY
Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
raw | String | Yes |  The hex string of the raw transaction
allowhighfees | Booleand | Optional, default=false | Allow high fees
swifttx | Boolean | Optional, default=false | Use SwiftTX to send this transaction

* for successed case

status: 200
```javascript
{
    "result": "ok",
    "data": tx_hash
}

- tx_hash: "hex" (string) The transaction hash in hex
```

* for failed case

status: 400
```javascript
{
    "result": "error",
    "message": err_msg
}
```
