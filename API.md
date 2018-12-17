# Public Rest API for BitcoinGreen Node

api prefix: '/api/v1'  

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
{ result: 'ok', data }
```

* for failed case

status: 400
```javascript
{
    "result": "error",
    "message": "RPC provider is not working"
}
```
