const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const path = require('path');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', {session: false});
//const index = require('./assets/index.html');

module.exports = function(app) {

  app.get('*', function (req, res) {

    res.sendFile(path.join(__dirname, '/assets/index.html'))
  });

  app.get('/dashboard', requireAuth, function(req, res) {
    res.send({ hi: 'you have reached protected resource' });
  });

  //signin route - on success will get jwt token for future requests
  app.post('/signin', requireSignin, Authentication.signin);
  //sign up route
  app.post('/signup', Authentication.signup);
}
