var CommissionApp = angular.module('CommissionApp', ['ui.bootstrap']);

// Requests

CommissionApp.controller('ShowRequestsCtrl', function ($scope){

    $scope.requests = [
        {
            "ticketId":1,
            "userOwnerId":1,
            "firstName":"Anton",
            "lastName":"Nik",
            "phone":null,
            "title":"Test ticket",
            "description":"Description ticket",
            "creationDate":"2015-08-13 00:00:00",
            "status":{
                "ticketsStatusId":2,
                "status":"PUBLIC",
                "publicStatus":true
            },
            "categories":[{
     "ticketCategoryId":2,
     "parentCategoryId":0,
     "title":"Cat2",
     "description":"Description for cat2"
            }]},
        {
            "ticketId":30,
            "userOwnerId":0,
            "firstName":"Anton",
            "lastName":"Nik",
            "phone":"911-99-99",
            "title":"Test ticket from client side",
            "description":"Description for ticket from client side",
            "creationDate":"2015-08-09 23:49:07.180925",
            "status":{
                "ticketsStatusId":2,
                "status":"PUBLIC",
                "publicStatus":true
            },
            "categories":[{
                "ticketCategoryId":2,
                "parentCategoryId":0,
                "title":"Cat2",
                "description":"Description for cat2"
            }]}
    ]

});



// MODALS

CommissionApp.controller('RequestFormCtrl', function ($scope, $modal) {
    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'requestModal.html',
            controller: 'CloseRequestCtrl',
            size: size
        });
    };
});
CommissionApp.controller('CloseRequestCtrl', function ($scope, $modalInstance) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});

CommissionApp.controller('AboutUsCtrl', function ($scope, $modal) {
    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'AboutUsModal.html',
            controller: 'CloseAboutUsCtrl',
            size: size
        });
    };
});
CommissionApp.controller('CloseAboutUsCtrl', function ($scope, $modalInstance) {
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});