(function() {

	var app = angular.module("photoViewer", []);

	var MainController = function($scope, $http) {
		  $scope.$on('$onPhotoComplete', function() {
		  });

		var onPhotoComplete = function(response) {
			$scope.photos = response.data;
		};

		var onError = function(reason) {
			$scope.error = "Could not fetch the data";
		};

		$http.get("https://jsonplaceholder.typicode.com/photos")
		     .then(onPhotoComplete, onError);

		$scope.message = "with AngularJS";
		

	};

	app.controller("MainController", MainController);


}());
