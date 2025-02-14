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

// admin-site
app.get('/admin', (req, res) => {res.render('admin-index', { activePage: 'index' }); });
// admin-site-post
app.get('/admin/create/user', (req, res) => {res.render('admin-create', { activePage: 'user' }); });
app.get('/admin/create/card', (req, res) => {res.render('admin-create', { activePage: 'card' }); });
app.get('/admin/create/driver', (req, res) => {res.render('admin-create', { activePage: 'driver' }); });
app.get('/admin/create/bus', (req, res) => {res.render('admin-create', { activePage: 'bus' }); });
app.get('/admin/create/route', (req, res) => {res.render('admin-create', { activePage: 'route' }); });
app.get('/admin/create/func', (req, res) => {res.render('admin-create', { activePage: 'func' }); });
// admin-site-get
app.get('/admin/get/users', (req, res) => {res.render('admin-getAll', { activePage: 'user' }); });
app.get('/admin/get/cards', (req, res) => {res.render('admin-getAll', { activePage: 'card' }); });
app.get('/admin/get/drivers', (req, res) => {res.render('admin-getAll', { activePage: 'driver' }); });
app.get('/admin/get/bus', (req, res) => {res.render('admin-getAll', { activePage: 'bus' }); });
app.get('/admin/get/routes', (req, res) => {res.render('admin-getAll', { activePage: 'route' }); });
app.get('/admin/get/funcs', (req, res) => {res.render('admin-getAll', { activePage: 'func' }); });
// admin-site-edit
app.get('/admin/edit/user/:id', (req, res) => {res.render('admin-edit', { activePage: 'user' }); });
app.get('/admin/edit/card', (req, res) => {res.render('admin-edit', { activePage: 'card' }); });
app.get('/admin/edit/driver', (req, res) => {res.render('admin-edit', { activePage: 'driver' }); });
app.get('/admin/edit/bus', (req, res) => {res.render('admin-edit', { activePage: 'bus' }); });
app.get('/admin/edit/route', (req, res) => {res.render('admin-edit', { activePage: 'route' }); });
app.get('/admin/edit/func', (req, res) => {res.render('admin-edit', { activePage: 'func' }); });
// admin-site-get
app.get('/admin/get/user/:id', (req, res) => {res.render('admin-get', { activePage: 'user' }); });
app.get('/admin/get/card', (req, res) => {res.render('admin-get', { activePage: 'card' }); });
app.get('/admin/get/driver', (req, res) => {res.render('admin-get', { activePage: 'driver' }); });
app.get('/admin/get/bus', (req, res) => {res.render('admin-get', { activePage: 'bus' }); });
app.get('/admin/get/route', (req, res) => {res.render('admin-get', { activePage: 'route' }); });
app.get('/admin/get/func', (req, res) => {res.render('admin-get', { activePage: 'func' }); });



module.exports = app;

