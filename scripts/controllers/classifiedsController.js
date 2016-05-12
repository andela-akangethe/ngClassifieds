(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsController', function($http, classifiedsFactory) {
      var vm = this;

      classifiedsFactory.getClassifieds().then(function(classifieds) {
        vm.classifieds = classifieds.data;
      });
    });
})();
