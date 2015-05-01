# Stimuli

## GET

* url structure `/api/v1/classrooms/:classroom_id/stimuli` 
* url example `/api/v1/classrooms/91/stimuli` 
* method `GET`
* header `Authorization`  
* value `Token token="66866be94e8172e1667f677b8409c3d8", email="randy-teacher@test.org"`  
* response example 

```
{
    "stimuli": [
        {
            "id": 6601,
            "user_id": 8181,
            "reading_stage": 1,
            "skill": "letter names",
            "sub_skill": "none",
            "value": "a",
            "assessment": "mastered"
        },
        {
            "id": 6602,
            "user_id": 8181,
            "reading_stage": 1,
            "skill": "letter names",
            "sub_skill": "none",
            "value": "b",
            "assessment": "learning"
        }    
    ]
}
```

## PUT

* url structure `/api/v1/stimuli/:id` 
* url example `/api/v1/stimuli/1234` 
* method `PUT`
* header `Authorization`  
* value `Token token="66866be94e8172e1667f677b8409c3d8", email="randy-teacher@test.org"`  
* Content-Type `application/json` 
* payload

```
{
	{
	   "id": 6601,
	   "user_id": 8181,
	   "reading_stage": 1,
	   "skill": "letter names",
	   "sub_skill": "none",
	   "value": "a",
	   "assessment": "mastered"
	}
}
```