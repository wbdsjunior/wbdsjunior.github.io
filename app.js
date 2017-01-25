angular
  .module("App", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "home.html"
      })
      .when("/me", {
        templateUrl: "me.html"
      })
      .when("/reads", {
        redirectTo: "/me/reads"
      })
      .when("/me/reads", {
        templateUrl: "reads.html"
      })
      .otherwise({
        redirectTo: "/"
      });
  });