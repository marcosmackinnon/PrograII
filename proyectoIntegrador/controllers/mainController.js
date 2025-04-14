let data = require("../db/usersData.js");

const mainController = {
    index: function(req, res) {
      res.render('index', { title: 'Mercedez Benz Store', data: data }); //va a replazar el title en <%= title %> del index.ejs  
    },

    searchResults: function(req, res) {
      res.render('search-results', { title: 'Mercedez Benz Store', data: data }); 
    },

    profile: function(req, res) {
      res.render('profile', { title: 'Mercedez Benz Store', data: data }); 
    },

    
  };

  module.exports = mainController;


 