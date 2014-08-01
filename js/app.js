var app = angular.module('app', ['ngRoute']);

window.routes =
{
    "/": {
        templateUrl: 'views/main.html', 
        controller: 'mainCtrl'
    }
}; 

app.config(['$routeProvider', function($routeProvider){

    //this loads up our routes dynamically from the previous object 
    for(var path in window.routes) {
        $routeProvider.when(path, window.routes[path]);
    }
    $routeProvider.otherwise({redirectTo: '/'});

}]).run(function($rootScope, $location){

    var path = function () { return $location.path(); };

});

app.controller('mainCtrl', ['$scope', function($scope) {
    $scope.city = ""
}]);