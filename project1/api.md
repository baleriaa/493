# Businesses 
## add business
#### Request: 
```
POST 
/businesses
```
#### Request body:
```
{
  "name": "Abarrotes Reyes",
  "address": "34 Calle Emiliano Zapata",
  "city": "La Mojonera",
  "state": "Michoacan",
  "zipCode": "60284",
  "phoneNumber": "1234567890",
  "category": "Grocery",
  "subCategory": "Convenience Store"
}
```

#### Response: 
  ```



  ```

## modify business
#### Request: 
```
PUT 
/businesses/{businessId}
```
#### Request body:
```
{
  "name": "Abarrotes Nicolas Reyes",
  "address": "34 Calle Emiliano Zapata",
  "city": "La Mojonera",
  "state": "Michoacan",
  "zipCode": "60284",
  "phoneNumber": "1234567890",
  "category": "Grocery",
  "subCategory": "Convenience Store"
}
```

#### Response:
  ```



  ```
## remove business:
#### Request: 
```
DELETE 
/businesses/{businessId}
```
#### Request body
  ```



  ```

#### Response: 
  ```



  ```

## get list of businesses:
#### Request: 
```
GET 
/businesses
```
#### Request body: 
  ```



  ``` 
#### Response body:
```
  {
    "page_number": 11,
    "total_pages": 432,
    "page_size": 10,
    "total_count": 4312,
    businesses: [
      {
        "id": "1",
        "rating": "4.2",
        "dollar signs": "2",
        "review": "review"
      },
      {
        "id": "2",
        "rating": "4.7",
        "dollar signs": "4",
        "review": "review"
      }
    ],
    "links": { 
      "previous": "/businesses?page=10",
      "next": "/businesses?page=12",
      "last": "/businesses?page=432"
      "first": "/businesses?page=1"
    }

  }

```

## fetch detailed response of a business. 
###### Includes reviews and photos
#### Request:
```
GET
/businesses/{businessID}/details
```
#### Request body:
```



```
#### Response body:
```
{
  "details":
    {
      "id": 7,
      "reviews":
        {
          ...,
          ...
        },
      "photos":
        {
          ...,
          ...
        }
    }
}
```
# Reviews

## write a review
#### Request: 
```
POST 
/reviews
```
#### Request body:
```
{
  "rating": "4.2",
  "dollar signs": "2",
  "review": "review"
}
```

#### Response: 
  ```



  ```

## modify a review 
#### Request: 
```
PUT 
/reviews/{reviewId}
```
#### Request body:
```
{
  "id": 4
  "rating": "4",
  "dollar signs": "2",
  "review": "review"
}
```
#### Response: 
  ```



  ```

## remove a review
#### Request body: 
```
DELETE /reviews/{reviewId}
```
#### Request body: 
  ```



  ```

#### Response: 
  ```



  ```
## Get list of reviews user has written
#### Request: 
```
GET 
users/{userId}/reviews
```
#### Request body: 
```



```

#### Response:
```  Response body: 

  {
    "reviews":
    {
      ...,
      ...
    }
  }
```
# Photos
## upload a photo
#### Request
```
PUT
/businesses/{businessID}/photos
```
#### Request body:
```
{
  "caption": "Best day ever"
}
```

#### Response body:
```
```

## remove a photo
#### Request:
```
DELETE
/businesses/{businessID}/photos/{photoID}
```
#### Request body:
```
```
#### Response body:
```
```

## modify a caption
#### Request:
```
POST
/businesses/{businessID}/photos/{photoID}/
```
#### Request body:
```
{
  "caption": "Actually...worst day ever"
}
```
#### Response body:
```
```

## get list of photos user has uploaded
#### Request:
```
GET
/users/{userID}/photos
```
#### Request body:
```
```
#### Response body:
```
{
  "page_number": 2,
  "total_pages": 2,
  "page_size": 10,
  "total_count": 17,
  "photos":
  {
    ...,
    ...
  }
}
```