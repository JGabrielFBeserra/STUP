const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Caminho correto para 'views'

app.use(express.static(path.join(__dirname, 'public')));


// public-site
app.get('/', (req, res) => {res.render('public-index', { activePage: 'index' });});
app.get('/card', (req, res) => {res.render('public-card', { activePage: 'card' });});
app.get('/consult', (req, res) => { res.render('public-consult', { activePage: 'consult' });});
app.get('/consult', (req, res) => { res.render('public-consult', { activePage: 'consult' });});
app.get('/app', (req, res) => { res.render('public-app', { activePage: 'app' });});
app.get('/service', (req, res) => { res.render('public-service', { activePage: 'service' });});
app.get('/business', (req, res) => { res.render('public-business', { activePage: 'business' });});
app.get('/about', (req, res) => { res.render('public-about', { activePage: 'about' }); });
app.get('/help', (req, res) => { res.render('public-help', { activePage: 'help' }); });
app.get('/login', (req, res) => { res.render('public-login', { activePage: 'consult' }); });


module.exports = app;

