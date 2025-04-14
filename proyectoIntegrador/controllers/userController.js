
const usersData = require("../db/usersData") // concectamos el users data 


const userController = {

  login: function(req, res) {
    res.render('login');
  },

  register: function(req, res) {
    res.render('register');
  },

  profile: function(req, res) {
    const user = usersData.users;
    const data = usersData; 
    res.render('profile', { user, data }); // le mandas al profile el user y el data
  },


}

module.exports = userController;

