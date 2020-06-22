# Reynald Lancer API Documentation

## USER FUNCTION

base url : https://reynaldlancer-api.herokuapp.com/
### Get All User (GET) 
url = https://reynaldlancer-api.herokuapp.com/user
### Login (POST)
url = https://reynaldlancer-api.herokuapp.com/login 
```Json
data
  {
  "_id":youremail, 
  "password":yourpasswoed
  }

```
### register (POST)
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
    }
}
```
### get_user (GET)
url = https://reynaldlancer-api.herokuapp.com/user/get
```Json
{
    "_id":String
}
```

## LOCATION API

### Provinsi (GET)
url = 

