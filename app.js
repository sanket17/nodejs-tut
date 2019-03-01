const express = require('express')
const app = express();
const config = require('config');
const debug = require('debug')('app:startup');
const pug = require('pug');
const courses = require('./routes/courses')
 
app.set('view engine', 'pug');
app.set('views','./views');
app.use('/api/course', courses);

app.get('/', function (req, res) {
  var htmlTemp = pug.renderFile('./views/index.pug', {title:'My Express App', message:'Hello World'});
  res.send(htmlTemp);
})

//Configuration
debug('Application Name:'+config.get('name'));
//console.log('Application Password:'+config.get('password'));

app.listen(3000);