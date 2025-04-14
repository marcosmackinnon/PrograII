
const mainController = {
    index: function(req, res) {
      res.render('index', { title: 'Mercedez Benz Store' }); //va a replazar el title en <%= title %> del index.ejs  
    },

    searchResults: function(req, res) {
      res.render('search-results');
    },

  };

  module.exports = mainController;


 