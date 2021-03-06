const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const MONGO_CONNECTION = '';
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')));

const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(authRoutes);
app.use(shopRoutes);


// app.use('/', (req, res, next) => {
// 	console.log('rendering main page huehue')
// 	res.render('mainview', {
// 		pageTitle: 'Hello World'
// 	})
// });

mongoose
	.connect(MONGO_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(result => {
		app.listen(3001);
		console.log('Connected Suck Cess Fully at port 3000')
	})
	.catch(err => {
		console.log(err);
	});