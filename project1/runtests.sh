#!/bin/sh

status() {
    printf "\n=====================================================\n"
    printf "%s\n" "$1"
    printf -- "-----------------------------------------------------\n"
}

# Business endpoints tests
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
-d '{"name": "Test Business test", "address": "Test", "city": "Test", "state": "Test", "zipCode": "Test", "phoneNumber": "Test", "category": "Test", "subCategory": "Test"}'


# Review endpoints tests


# Photo endpoints tests