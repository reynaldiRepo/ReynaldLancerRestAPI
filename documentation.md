# Reynald Lancer API Documentation

## USER FUNCTION

base url : https://reynaldlancer-api.herokuapp.com/
### Get All User 
url = https://reynaldlancer-api.herokuapp.com/user
### Login 
url = https://reynaldlancer-api.herokuapp.com/login 
```Json
data
  {
  "email":youremail, 
  "password":yourpasswoed
  }

```
### register 
url = https://reynaldlancer-api.herokuapp.com/user/register
``` json
{
     "_id":{
        type:String
    },
    "nama":{
        type:String
    },
    "alamat":{
        type:String,
        default:""
    },
    "no_telephone":{
        type:String
    },
    "password":{
        type:String
    },
    "ratting":{
        type:Number,
        default:0
    },
    "saldo":{
        type:Number,
        default:0
    }
}
```