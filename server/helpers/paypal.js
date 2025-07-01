const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ad4evelgyVJV9DqDaYnJP5UyBhbRqeNbyvQDVyyDpxczTkimNMORjysIXMtqwnpCYKwyMZnASnY27Wf3",
  client_secret: "EG5g6lkVVeALsXZbWSNKKjrGCd7Dre_IEqNPVUvVqQaQHhGvSBfSUW68lCPOZn8_bLr-GXbcU8bUSnUS",
});

module.exports = paypal;