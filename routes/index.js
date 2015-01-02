
/*
 * GET home page.
 */

exports.index = function(req, res){
	var YQL = require("yql");
 
	new YQL.exec('select * from html where url="http://www.pewforum.org/2011/01/27/table-muslim-population-by-country/" and xpath="//table"', function(response) {
	 
		if(response.query.results!=undefined){
			//response consists of JSON of Muslim population
			res.render('index', { title: 'Hijab Map', data: response.query.results.table });
		}
	});
	
};