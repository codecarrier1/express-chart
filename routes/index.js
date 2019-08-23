var express = require('express')
var app = express()
const fileUpload = require('express-fileupload')

app.use(fileUpload());

app.get('/', function(req, res) {
	// render to views/index.ejs template file
	res.render('index', {title: 'Upload CSV File'})
})

app.post('/upload', function (req, res, next) {

    if (Object.keys(req.files).length == 0) {
	    return res.status(400).send('No files were uploaded.');
	}

	// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
	let sampleFile = req.files.sampleFile;

	// Use the mv() method to place the file somewhere on your server
	sampleFile.mv('public/csv/'+sampleFile.name, function(err) {
	  if (err)
	    return res.status(500).send(err);

		var data = {
			filename: sampleFile.name
		}
		
		req.getConnection(function(error, conn) {
			conn.query('INSERT INTO csvdata SET ?', data, function(err, result) {
				if (err) {
					console.log(err);
					req.flash('error', err)
					res.render('user/chart', {
						title: 'Chart', 
						filename: ''
					})
				} else {
					// render to views/user/list.ejs template file
					console.log(result);
					res.render('user/chart', {
						title: 'Chart', 
						filename: data.filename
					})
				}
			});
		});
	});
})

/** 
 * We assign app object to module.exports
 * 
 * module.exports exposes the app object as a module
 * 
 * module.exports should be used to return the object 
 * when this file is required in another module like app.js
 */ 
module.exports = app;