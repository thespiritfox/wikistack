const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const app = express();
const { db } = require('./models');
const wikiRouter = require('./routes/wiki')
const usersRouter = require('./routes/users')

db.authenticate().then(() => console.log('Database initialized...'));

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter)
app.use('users', usersRouter)


app.get('/', function (req, res) {
  res.redirect('/wiki');
});

app.get('wiki', function (req, res){})

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });

  app.listen(PORT, function () {
    console.log(`Listening on PORT: ${PORT}`);
  });
};

init();
