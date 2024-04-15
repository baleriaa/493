// implement a route for each of the API endpoints in design
// parameterized API endpoints performs basic verification of the specified route parameters
// any api endpoint that takes a request body should perform basic verification of provided data
// each endpoint should respond with an appropriate http status code and when needed, a aresponse body
// endpoints should be paginated when appropriate
// Server should run on tcp port specified by PORT environment
// able to start server using npm start
// Dont worry about storing data in a server
// dont worry about users, only businesses, reviews and photos
// dont worry about photo pixel data

const express = require('express')
const app = express();

app.use(express.json());

const port = 8086;

const businesses = [
  {
    id: 1,
    name: "Business 1",
    address: "Test st.",
    city: "Test",
    state: "TS",
    zipCode: "97701",
    phoneNumber: "123-456-7890",
    category: "Test",
    subCategory: "Test"
  },
  {
    id: 2,
    name: "Business 2",
    address: "Test st.",
    city: "Test",
    state: "TS",
    zipCode: "97701",
    phoneNumber: "123-456-7890",
    category: "Test",
    subCategory: "Test"
  }
];
const reviews = [];
const photos = [];

app.listen(port, () => {
  console.log("== Server is listening on port", port);
});

// businesses

// add
app.post('/businesses', (req, res) => {
  var {name, address, city, state, zipCode, phoneNumber, category, subCategory} = req.body;

  if (name && address && city && state && zipCode && phoneNumber && category && subCategory) {
    var business = {
      id: businesses.length + 1,
      name: name,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
      phoneNumber: phoneNumber,
      category: category,
      subCategory: subCategory
    };

    businesses.push(business);

    res.status(201).json(business);
  } else {
    res.status(400).json({
      error: "Request needs a JSON body with all required fields"
    });
  }
});

// modify
app.put('/businesses/:businessID', (req, res, next) => {
  var businessID = parseInt(req.params.businessID);

  if (businesses[businessID]) {
    if (req.body && req.body.name && req.body.address && req.body.city && req.body.state && req.body.zipCode && req.body.phoneNumber && req.body.category && req.body.subCategory) {
      businesses[businessID] = {
        id: businessID,
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        phoneNumber: req.body.phoneNumber,
        category: req.body.category,
        subCategory: req.body.subCategory
      
      };
      res.status(200).json(businesses[businessID]);
    } else {
      res.status(400).json({
        error: "Request needs a JSON body with all required fields"
      });
    }
  } else {
    next();
  }
});

// remove
// get list of all
app.get('/businesses', (req, res, next) => {
  var page = parseInt(req.query.page) || 1;
  var numPerPage = 10;
  var lastPage = Math.ceil(businesses.length / numPerPage);

  page = page < 1 ? 1 : page;
  page = page > lastPage ? lastPage : page;
  var start = (page - 1) * numPerPage;
  var end = start + numPerPage;
  var pageBusinesses = businesses.slice(start, end);
  var links = {};

  if (page < lastPage) {
      links.nextPage = `/businesses?page=${page + 1}`;
      links.lastPage = `/businesses?page=${lastPage}`;
  }
  if (page > 1) {
      links.prevPage = `/businesses?page=${page - 1}`;
      links.firstPage = `/businesses?page=1`;
  }

  res.status(200).json({
    pageNumber: page,
    totalPages: lastPage,
    pageSize: numPerPage,
    totalCount: businesses.length,
    businesses: pageBusinesses,
    links: links
  });
})

// fetch detailed response of one business
app.get('/businesses/:businessID', (req, res, next) => {
  var businessID = parseInt(req.params.businessID);
  if (businesses[businessID]) {
    res.status(200).json(businesses[businessID]);
  } else {
    next();
  }
})


// reviews

// write


// modify 
// remove
// get list of all


// photos
// upload
// remove
// modify caption
// get list of all photos a user has uploaded



