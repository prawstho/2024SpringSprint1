global.DEBUG = true;

const express = require("express");
const app = express();
const PORT = 3000;

const { newToken, tokenCount } = require('./token');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.listen(PORT, () => {
    console.log(`CLI website companion running on port ${PORT}.`)
});

app.get("/", (request, response) => {
    response.render('cli',{ name: 'Easter Bunny', title: 'CLI WEB SITE'})
})
app.get('/new', (request, response) => {
    response.render('newtoken');
});
app.post('/new', (request, response) => {
  var theToken = newToken(request.body.username);
  response.end(`New user created for: ${request.body.username} with a ${theToken} token.`);
  console.log(`new post.`);
});

app.get('/count', async (request, response) => {
  var theCount = await tokenCount();
  response.end(`the count is ${theCount}.`);
});

app.use((request, response) => {
    response.status(404).render('fourohfour');
});