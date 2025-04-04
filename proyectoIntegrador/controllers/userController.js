
const usersData = require('../data/usersData') // concectamos el users data 


const userController = {

  login: function(req, res) {
    res.render('login');
  },

  register: function(req, res) {
    res.render('register');
  },

  profile: function(req, res) {
    const user = usersData[0]; // esta bien?
    res.render('profile', { user }); // le mandas el profile y el user 
  },


}

module.exports = userController;

