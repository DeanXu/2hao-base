var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.index = function(req, res){

  var a = new Article({title:'test_title1',url:'test_url',text:'test_text'});
  a.save(function(){
    Article.find(function(err, articles){
      if(err) throw new Error(err);
      res.render('home/index', {
        title: 'Generator-Express MVC',
        articles: articles
      });
    });
  });

};
