(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsController', function($http, classifiedsFactory, $mdSidenav, $scope, $mdToast) {
      var vm = this;

      classifiedsFactory.getClassifieds().then(function(classifieds) {
        vm.classifieds = classifieds.data;
      });

      vm.openSidebar = function() {
        $mdSidenav('left').open();
      }

      vm.closeSidebar = function() {
        $mdSidenav('left').close();
      }

      vm.saveClassified = function(product) {
        if (product) {
          vm.classifieds.push(product);
          $scope.product = {};
        }
      }

      vm.deleteClassifieds = function(product) {
        var index = vm.classifieds.indexOf(product);
        vm.classifieds.splice(index, 1);
      }
    });
})();
