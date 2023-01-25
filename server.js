const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Inform Express.js on which template engine to use
// Add express-session and store as Express.js middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use("/",require(path.join(__dirname,'routes/blog.js')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
