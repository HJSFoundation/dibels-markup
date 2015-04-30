# Authorization

* url structure `/api/v1/sign_in?email=[email]&password=[password]` 
* url example `/api/v1/sign_in?email=randy-teacher@test.org&password=12345678` 
* method `POST`
* header `Authorization`  
* value `Token token="66866be94e8172e1667f677b8409c3d8", email="randy-teacher@test.org"`  
* response example 

```
{
    "token": "66866be94e8172e1667f677b8409c3d8",
    "email": "randy-teacher@test.org",
    "first_name": "Randy",
    "last_name": "Burgess-Teacher",
    "classroom_id": 91
}
```