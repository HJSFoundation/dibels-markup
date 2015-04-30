# Students

* url structure `/api/v1/classrooms/:classroom_id/students` 
* url example `/api/v1/classrooms/91/students` 
* method `GET`
* header `Authorization`  
* value `Token token="66866be94e8172e1667f677b8409c3d8", email="randy-teacher@test.org"`  
* response example 

```
{
    "students": [
        {
            "id": 6361,
            "first_name": "CJR",
            "last_name": "Crony",
            "reading_stage": 7,
            "archived": false,
            "updated_at": "2015-04-30T03:36:48.326Z",
            "created_at": "2014-12-10T04:05:02.703Z"
        },
        {
            "id": 3715,
            "first_name": "Angeleah",
            "last_name": "Daidone-Student",
            "reading_stage": 5,
            "archived": false,
            "updated_at": "2015-04-30T03:36:48.494Z",
            "created_at": "2014-11-12T17:20:48.274Z"
        },
        {
            "id": 314,
            "first_name": "Kitty",
            "last_name": "Leannon",
            "reading_stage": 6,
            "archived": false,
            "updated_at": "2015-04-30T03:36:54.146Z",
            "created_at": "2014-10-01T00:12:18.115Z"
        },
        {
            "id": 5349,
            "first_name": "Louis",
            "last_name": "Pasteur",
            "reading_stage": 2,
            "archived": false,
            "updated_at": "2015-04-30T03:36:57.398Z",
            "created_at": "2014-12-02T18:13:02.428Z"
        },
        {
            "id": 5347,
            "first_name": "Jackson",
            "last_name": "Pollock",
            "reading_stage": 6,
            "archived": false,
            "updated_at": "2015-04-30T03:36:57.883Z",
            "created_at": "2014-12-02T18:12:05.034Z"
        },
        {
            "id": 5348,
            "first_name": "Vincent",
            "last_name": "Van Gogh",
            "reading_stage": 8,
            "archived": false,
            "updated_at": "2015-04-30T03:37:01.643Z",
            "created_at": "2014-12-02T18:12:25.243Z"
        }
    ]
}
```