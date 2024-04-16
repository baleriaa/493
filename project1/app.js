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
const reviews = [
  {
    id: 1,
    businessID: 1,
    rating: 5,
    dollarSigns: 4,
    review: "Test"
  },
  {
    id: 2,
    businessID: 1,
    rating: 5,
    dollarSigns: 5,
    review: "Test"
  }
];
const photos = [
  {
    id: 1,
    businessID: 1,
    caption: "Test"
  },
  {
    id: 2,
    businessID: 1,
    caption: "Test",
  }
];

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
// TODO
// app.post('reviews', (req, res) => {
// })

// modify

app.put('/businesses/:businessID/reviews', (req, res, next) => {
  var businessID = parseInt(req.params.businessID);

  if (businesses[businessID]) {
    var reviewID = parseInt(req.params.reviewID);

    if (reviews[reviewID]) {
      if (req.body && req.body.rating && req.body.dollarSigns && req.body.review) {
        reviews[reviewID] = {
          id: reviewID,
          businessID: businessID,
          rating: req.body.rating,
          dollarSigns: req.body.dollarSigns,
          review: req.body.review
        };
        res.status(200).json(reviews[reviewID]);
      } else {
        res.status(400).json({
          error: "Request needs a JSON body with all required fields"
        });
      }
    } else {
      next();
    }
  } else {
    next();
  }
})
// remove
app.delete('/businesses/:businessID/reviews/:reviewID', (req, res, next) => {
  var businessID = parseInt(req.params.businessID);
  var reviewID = parseInt(req.params.reviewID);

  if (businesses[businessID] && reviews[reviewID]) {
    reviews[reviewID] = null;
    res.status(204).end();
  } else {
    next();
  }
})
// get list of all
app.get('/businesses/:businessID/reviews', (req, res, next) => {
  var businessID = parseInt(req.params.businessID);
  var page = parseInt(req.query.page) || 1;
  var numPerPage = 10;
  var lastPage = Math.ceil(reviews.length / numPerPage);

  page = page < 1 ? 1 : page;
  page = page > lastPage ? lastPage : page;
  var start = (page - 1) * numPerPage;
  var end = start + numPerPage;
  var pageReviews = reviews.slice(start, end);
  var links = {};

  if (page < lastPage) {
      links.nextPage = `/businesses/${businessID}/reviews?page=${page + 1}`;
      links.lastPage = `/businesses/${businessID}/reviews?page=${lastPage}`;
  }
  if (page > 1) {
      links.prevPage = `/businesses/${businessID}/reviews?page=${page - 1}`;
      links.firstPage = `/businesses/${businessID}/reviews?page=1`;
  }

  res.status(200).json({
    pageNumber: page,
    totalPages: lastPage,
    pageSize: numPerPage,
    totalCount: reviews.length,
    reviews: pageReviews,
    links: links
  });
})

// photos
// upload

// remove
app.delete('/businesses/:businessID/photos/:photoID', (req, res, next) => {
  var businessID = parseInt(req.params.businessID);
  var photoID = parseInt(req.params.photoID);

  if (businesses[businessID] && photos[photoID]) {
    photos[photoID] = null;
    res.status(204).end();
  } else {
    next();
  }
})
// modify caption
// get list of all photos a user has uploaded
app.get('/businesses/:businessID/photos', (req, res, next) => {
  var businessID = parseInt(req.params.businessID);
  var page = parseInt(req.query.page) || 1;
  var numPerPage = 10;
  var lastPage = Math.ceil(photos.length / numPerPage);

  page = page < 1 ? 1 : page;
  page = page > lastPage ? lastPage : page;
  var start = (page - 1) * numPerPage;
  var end = start + numPerPage;
  var pagePhotos = photos.slice(start, end);
  var links = {};

  if (page < lastPage) {
      links.nextPage = `/businesses/${businessID}/photos?page=${page + 1}`;
      links.lastPage = `/businesses/${businessID}/photos?page=${lastPage}`;
  }
  if (page > 1) {
      links.prevPage = `/businesses/${businessID}/photos?page=${page - 1}`;
      links.firstPage = `/businesses/${businessID}/photos?page=1`;
  }

  res.status(200).json({
    pageNumber: page,
    totalPages: lastPage,
    pageSize: numPerPage,
    totalCount: photos.length,
    photos: pagePhotos,
    links: links
  });
})



