var app = angular.module("app", ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            'templateUrl': '/html/admin/admin-home.html',
            'controller': 'adminHomeCtrl'
        })
        .when('/resume/:resumeId/review', {
            'templateUrl': '/html/admin/review-resume.html',
            'controller': 'reviewResumeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


app.controller('adminHomeCtrl', function($scope, $http, $routeParams) {

});

app.controller('reviewResumeCtrl', function($scope, $http, $routeParams) {

    $scope.resumeId ;

    $scope.profile ;

    $scope.applicant={};

    $scope.mode ;

    $scope.error;

    $scope.init = function(){
        $scope.resumeId = $routeParams.resumeId;
        $scope.profile = $routeParams['profile'];
    };

    $scope.createApplicant = function(form){
        console.log(form);
        console.log($scope.applicant);
        if(!form.$invalid){
            $http({
                url: 'api/career/applicant/' + $scope.resumeId,
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: $scope.applicant
            }).success(function(data, status){
                if(status == 200){
                    console.log("Successfully created applicant");
                    $scope.mode = 'reviewed';
                    $scope.error = null;
                } else {
                    console.log("Error : Response Status Code-" + status);
                    $scope.error = "Failed to create applicant";
                }
            }).error(function(error, status){
                console.log("Error : " + error);
                $scope.error = "Failed to create applicant";
            });

        }

    };


});