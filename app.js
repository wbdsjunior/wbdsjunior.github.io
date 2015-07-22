angular
	.module("App", ["ngRoute"])
	.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl : "home.html"
			})
			.when("/me", {
				redirectTo : "/about/me"
			})
			.when("/about/me", {
				templateUrl : "me.html"
			})
			.otherwise({
				redirectTo : "/"
			});
	});