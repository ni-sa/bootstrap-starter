(function () {
    "use strict";

    angular
        .module("myApp")
        .controller("oneController", OneController);

    OneController.$inject = ["$scope"
                            , "$rootScope"];

    function OneController($scope
                            , $rootScope) {

        var vm = this;

        vm.message = "This is the message coming from the scope.";

        _render();

        function _render() {
        };

    }
})();