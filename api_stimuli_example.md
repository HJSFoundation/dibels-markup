# Stimuli

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
        },
        {
            "id": 6603,
            "user_id": 8181,
            "reading_stage": 1,
            "skill": "letter names",
            "sub_skill": "none",
            "value": "c",
            "assessment": "learning"
        },
        {
            "id": 6604,
            "user_id": 8181,
            "reading_stage": 1,
            "skill": "letter names",
            "sub_skill": "none",
            "value": "d",
            "assessment": "mastered"
        },
        {
            "id": 6605,
            "user_id": 8181,
            "reading_stage": 1,
            "skill": "letter names",
            "sub_skill": "none",
            "value": "e",
            "assessment": "mastered"
        },
        {
            "id": 6606,
            "user_id": 8181,
            "reading_stage": 1,
            "skill": "letter names",
            "sub_skill": "none",
            "value": "f",
            "assessment": "needs work"
        },
        {
            "id": 6607,
            "user_id": 8181,
            "reading_stage": 1,
            "skill": "letter names",
            "sub_skill": "none",
            "value": "g",
            "assessment": "mastered"
        },
        {
            "id": 6608,
            "user_id": 8181,
            "reading_stage": 1,
            "skill": "letter names",
            "sub_skill": "none",
            "value": "h",
            "assessment": "needs work"
        },
    ]
}
```