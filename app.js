angular
	.module("App", ["ngRoute"])
	.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl : "home.html"
			})
			.otherwise({
				redirectTo : "/"
			});
	});