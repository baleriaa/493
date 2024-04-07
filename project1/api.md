<!-- Businesses -->
# add business
## Request: POST /businesses
## Request body:
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

### Response: -

# modify business
## Request: PUT /businesses/{businessId}
## Request body:
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

### Response: -

# remove business
## Request: DELETE /businesses/{businessId}
## Request body: -

### Response:
  none

# get list of businesses
## Request: GET /businesses
## Request body: 
  none  

# fetch detailed response of a business
# includes reviews and photos


<!-- Reviews -->
# write a review
## Request: POST /reviews
## Request body:
{
  "rating": "4.2",
  "dollar signs": "2",
  "review": "review"
}

## Response: 
Response body: -

# modify a review
## 
## Request: PUT /reviews/{reviewId}
## Request body:
{
  "rating": "4.2",
  "dollar signs": "2",
  "review": "review"
}
## Response: - 

# remove a review
## Request body: DELETE /reviews/{reviewId}
## Request body: -

## Response:
  Response body:  -

# get list of reviews user has written
## Request: GET /reviews
## Request body: -

## Response:
  Response body: 
  {
    "reviews": [
      {
        "rating": "4.2",
        "dollar signs": "2",
        "review": "review"
      }
    ]
  }

<!-- Photos -->
# upload a photo


# remove a photo


# modify a caption


# get list of photos user has uploaded

