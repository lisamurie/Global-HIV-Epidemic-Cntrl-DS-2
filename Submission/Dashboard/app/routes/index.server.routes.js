
module.exports = function(app) {
	var index = require('../controllers/index.server.controller');
	app.get('/', index.render);
	app.post('/charts', index.render_charts);
	
};