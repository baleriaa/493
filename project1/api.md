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

### Response: 
  none

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

### Response: 
  none


# remove business
## Request: DELETE /businesses/{businessId}
## Request body:
  none

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


# modify a review


# remove a review


# get list of reviews user has written


<!-- Photos -->
# upload a photo


# remove a photo


# modify a caption


# get list of photos user has uploaded

