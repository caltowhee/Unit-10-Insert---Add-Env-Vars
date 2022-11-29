const express = require("express")
const router = express.Router();

var database = require('../database');

router.get("/add", (request, response){
		 	response.render('customer.ejs', {title:'Welcome to the Megaverse',action:'add'});

	});

router.post("/add_customer", (request, response) {

	var first_name = request.body.fname;
	var last_name = request.body.lname;
  var ship_street1 = request.body.address1;
  var ship_street2 = request.body.address2;
  var ship_city =  request.body.city;
  var ship_county =  request.body.county;
  var ship_state =  request.body.state;
  var ship_country =  request.body.country;
  var ship_zip_post =  request.body.zip;
  var ship_DOB =  request.body.bday;
  ///onsole.log ("ship_ship_DOB)
  if (ship_DOB == '') {
    
    ship_DOB = "NULL"
  }

  var query = `
	INSERT INTO customer 
	(fname, lname, ship_street1, ship_street2, ship_city, ship_county, ship_state, ship_zip_post, ship_country, DOB) 
	VALUES ("${first_name}", "${last_name}", "${ship_street1}","${ship_street2}", "${ship_city}","${ship_county}", "${ship_state}", "${ship_zip_post}", "${ship_country}", ${ship_DOB})
	`;

  //console.log (query);

  database.query(query, (error, data) {

		if(error)
		{
      //console.log (error);
			throw error;
		}	
		else
		{
			response.redirect("/"); //Send back to homepage
		}

	});

});


module.exports = router;

