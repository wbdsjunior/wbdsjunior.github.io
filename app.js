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
			.when("/about/reads", {
				redirectTo : "/about/me/reads"
			})
			.when("/about/me/reads", {
				templateUrl : "me.html"
			})
			.otherwise({
				redirectTo : "/"
			});
	});