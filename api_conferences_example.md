# Conferences

* url structure `/api/v1/classrooms/:classroom_id/conferences` 
* url example `/api/v1/classrooms/91/conferences` 
* method `GET`
* header `Authorization`  
* value `Token token="66866be94e8172e1667f677b8409c3d8", email="randy-teacher@test.org"`  
* response example 

```
{
    "conferences": [
        {
            "id": 85,
            "classroom_id": 91,
            "name": "CJR Crony",
            "conference_type": "user",
            "weight": 5,
            "number_per_week": 1,
            "last_conference_date": "2015-04-30T23:34:00.096Z",
            "test": false,
            "archived": false,
            "updated_at": "2015-04-30T23:34:00.101Z",
            "created_at": "2015-04-30T23:34:00.101Z",
            "user_ids": [
                6361
            ]
        },
        {
            "id": 86,
            "classroom_id": 91,
            "name": "Angeleah Daidone-Student",
            "conference_type": "user",
            "weight": 4,
            "number_per_week": 5,
            "last_conference_date": "2015-04-30T23:34:00.112Z",
            "test": false,
            "archived": false,
            "updated_at": "2015-04-30T23:34:00.114Z",
            "created_at": "2015-04-30T23:34:00.114Z",
            "user_ids": [
                3715
            ]
        },
        {
            "id": 87,
            "classroom_id": 91,
            "name": "Kitty Leannon",
            "conference_type": "user",
            "weight": 1,
            "number_per_week": 5,
            "last_conference_date": "2015-04-30T23:34:00.120Z",
            "test": false,
            "archived": false,
            "updated_at": "2015-04-30T23:34:00.122Z",
            "created_at": "2015-04-30T23:34:00.122Z",
            "user_ids": [
                314
            ]
        },
        {
            "id": 88,
            "classroom_id": 91,
            "name": "Louis Pasteur",
            "conference_type": "user",
            "weight": 2,
            "number_per_week": 2,
            "last_conference_date": "2015-04-30T23:34:00.128Z",
            "test": false,
            "archived": false,
            "updated_at": "2015-04-30T23:34:00.130Z",
            "created_at": "2015-04-30T23:34:00.130Z",
            "user_ids": [
                5349
            ]
        },
        {
            "id": 89,
            "classroom_id": 91,
            "name": "Jackson Pollock",
            "conference_type": "user",
            "weight": 1,
            "number_per_week": 3,
            "last_conference_date": "2015-04-30T23:34:00.135Z",
            "test": false,
            "archived": false,
            "updated_at": "2015-04-30T23:34:00.137Z",
            "created_at": "2015-04-30T23:34:00.137Z",
            "user_ids": [
                5347
            ]
        },
        {
            "id": 90,
            "classroom_id": 91,
            "name": "Vincent Van Gogh",
            "conference_type": "user",
            "weight": 6,
            "number_per_week": 2,
            "last_conference_date": "2015-04-30T23:34:00.144Z",
            "test": false,
            "archived": false,
            "updated_at": "2015-04-30T23:34:00.146Z",
            "created_at": "2015-04-30T23:34:00.146Z",
            "user_ids": [
                5348
            ]
        },
        {
            "id": 91,
            "classroom_id": 91,
            "name": "Schiller-Corkery",
            "conference_type": "group",
            "weight": 3,
            "number_per_week": 4,
            "last_conference_date": "2015-04-30T23:34:00.153Z",
            "test": false,
            "archived": false,
            "updated_at": "2015-04-30T23:34:00.154Z",
            "created_at": "2015-04-30T23:34:00.154Z",
            "user_ids": [
                6361,
                3715
            ]
        },
        {
            "id": 92,
            "classroom_id": 91,
            "name": "Littel, Satterfield and Halvorson",
            "conference_type": "group",
            "weight": 6,
            "number_per_week": 3,
            "last_conference_date": "2015-04-30T23:34:00.156Z",
            "test": false,
            "archived": false,
            "updated_at": "2015-04-30T23:34:00.157Z",
            "created_at": "2015-04-30T23:34:00.157Z",
            "user_ids": [
                314,
                5349
            ]
        },
        {
            "id": 93,
            "classroom_id": 91,
            "name": "Koss LLC",
            "conference_type": "group",
            "weight": 2,
            "number_per_week": 1,
            "last_conference_date": "2015-04-30T23:34:00.160Z",
            "test": false,
            "archived": false,
            "updated_at": "2015-04-30T23:34:00.161Z",
            "created_at": "2015-04-30T23:34:00.161Z",
            "user_ids": [
                6361,
                3715,
                314
            ]
        },
        {
            "id": 94,
            "classroom_id": 91,
            "name": "Gerlach-Hamill",
            "conference_type": "group",
            "weight": 6,
            "number_per_week": 3,
            "last_conference_date": "2015-04-30T23:34:00.163Z",
            "test": false,
            "archived": false,
            "updated_at": "2015-04-30T23:34:00.163Z",
            "created_at": "2015-04-30T23:34:00.163Z",
            "user_ids": [
                3715,
                314,
                5349,
                5347,
                5348
            ]
        }
    ]
}```