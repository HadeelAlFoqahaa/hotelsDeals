requirejs([
	'App',
	'Router'
],
function (
	App,
	Router
) {

	App.Router = new Router();
	App.start();
});