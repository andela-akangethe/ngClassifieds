(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsController', function($http) {
      var vm = this;

      $http.get('data/classifieds.json').then(function(classifieds) {
        vm.classifieds = classifieds.data;
      });
    });
})();