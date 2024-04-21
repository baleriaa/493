#!/bin/sh

status() {
    printf "\n=====================================================\n"
    printf "%s\n" "$1"
    printf -- "-----------------------------------------------------\n"
}

# Business endpoints
status 'GET business should return first page of businesses'
curl http://localhost:8086/businesses

status 'GET business/businessID should return a specific business'
curl http://localhost:8086/businesses/1

status 'GET business + invalid businessID should return an error'
curl http://localhost:8086/businesses/9999

status 'POST business should add a new business'
curl -X POST http://localhost:8086/businesses \
-H "Content-Type: application/json" \
-d '{"name": "Test Business", "address": "Test", "city": "Test", "state": "Test", "zipCode": "Test", "phoneNumber": "Test", "category": "Test", "subCategory": "Test"}'

status 'PUT business/businessID should update the indicated business'
curl -X PUT http://localhost:8086/businesses/1 \
-H "Content-Type: application/json" \
-d '{"name": "PUT Test", "address": "Test", "city": "Test", "state": "Test", "zipCode": "Test", "phoneNumber": "Test", "category": "Test", "subCategory": "Test"}'
############################################################################################################
# Review endpoints 
# status 'PUT business/businessID/reviews should edit the indicated review'
# curl -X PUT http://localhost:8086/businesses/2/reviews \
# -H "Content-Type: application/json" \
# -d '{"rating": "5", "dollarSigns": "4", "review": "Test"}'
# status 'DELETE reviews/reviewID should delete the indicated review and return nothing'
# curl -X DELETE http://localhost:8086/reviews/1
status 'GET reviews should return all reviews'
curl http://localhost:8086/reviews

############################################################################################################
# Photo endpoints