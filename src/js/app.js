var CommissionApp = angular.module('CommissionApp', ['ui.bootstrap']);

// Requests

CommissionApp.controller('ShowTicketsCtrl', function ($scope) {
    $scope.tickets = [
        {
            "ticketId": 1,
            "userOwnerId": 1,
            "firstName": "Anton",
            "lastName": "Nik",
            "phone": "911-99-99",
            "address": "18178, Some city, some street in city, 1, apt 15",
            "title": "Test ticket",
            "description": "Description ticket",
            "creationDate": "2015-08-13 00:00:00",
            "status": {
                "ticketsStatusId": 2,
                "status": "PUBLIC",
                "publicStatus": true
            },
            "categories": [{
                "ticketCategoryId": 2,
                "parentCategoryId": 0,
                "title": "Cat2",
                "description": "Description for cat2"
            }]
        },
        {
            "ticketId": 30,
            "userOwnerId": 0,
            "firstName": "Anton",
            "lastName": "Nik",
            "phone": "911-99-99",
            "address": "18178, Some city, some street in city, 1, apt 15",
            "title": "Test ticket from client side",
            "description": "Description for ticket from client side",
            "creationDate": "2015-08-09 23:49:07.180925",
            "status": {
                "ticketsStatusId": 2,
                "status": "PUBLIC",
                "publicStatus": true
            },
            "categories": [{
                "ticketCategoryId": 2,
                "parentCategoryId": 0,
                "title": "Cat2",
                "description": "Description for cat2"
            }]
        }
    ];
    $scope.formatDate = function(date){
        var dateOut = new Date(date);
        return dateOut;
    };
});


// MODALS

// Controllers for Request Form Modal
CommissionApp.controller('TicketFormCtrl', function ($scope, $modal) {
    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'ticketFormModal.html',
            controller: 'CloseTicketFormCtrl',
            size: size
        });
    };
});
CommissionApp.controller('CloseTicketFormCtrl', function ($scope, $modalInstance) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});

// Controllers for About Us Modal
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

// Controllers for Request View Modal
CommissionApp.controller('TicketViewCtrl', function ($scope, $modal) {
    $scope.open = function (ticket) {
        var modalInstance = $modal.open({
            templateUrl: 'ticketViewModal.html',
            controller: 'CloseTicketViewCtrl',
            scope: $scope,
            resolve: {
                ticket: function () {
                    return ticket;
                }
            }
        });
    };
});
CommissionApp.controller('CloseTicketViewCtrl', function ($scope, $modalInstance) {
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});

// Form validation

CommissionApp.controller('validateCtrl', function($scope) {
    $scope.namePattern = /([А-яЁё])+/;
    $scope.emailPattern = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
    $scope.phonePattern = /^[+\(\)0-9-\s]{5,18}$/;
});


// File validation
CommissionApp.directive('validFile', function () {

    return {
        require: 'ngModel',
        scope: {
            fileTypes: '=valFileTypes',
            fileSize: '=valFileSize'
        },
        link: function (scope, elem, attrs, ngModel) {

            elem.bind('change', function () {
                validate(elem[0].files);
            });

            function validate(files) {
                var validType = true;
                var validSize = true;
                var filePattern = new RegExp("^([a-zA-Z0-9А-яЁё\s_\\.\-:])+\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|doc|DOC|pdf|PDF)$");

                // Check file type and size of each file
                if (!filePattern.test(files[0].name)) {
                    validType = false;
                    //clearFileInput(elem[0]);
                }
                if( files[0] && files[0].size > 10485760 ) {
                    validSize = false;
                    //clearFileInput(elem[0]);
                }

                ngModel.$setValidity('valFileTypes', validType);
                ngModel.$setValidity('valFileSize', validSize);
            }
        }
    };

    function clearFileInput(ctrl) {
        try {
            ctrl.value = null;
        } catch(ex) { }
        if (ctrl.value) {
            ctrl.parentNode.replaceChild(ctrl.cloneNode(true), ctrl);
        }
    }
});