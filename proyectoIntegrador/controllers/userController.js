
const usersData = require("../db/usersData") // concectamos el users data 


const userController = {

  login: function(req, res) {
    res.render('login');
  },

  register: function(req, res) {
    res.render('register');
  },

  profile: function(req, res) {
    const user = usersData.users[0]; 
    res.render('profile', { user }); // le mandas el profile y el user 
  },


}

module.exports = userController;

