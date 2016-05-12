angular
  .module('ngClassifieds', ['ngMaterial'])
  .config(config);

function config($mdThemingProvider) {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('teal')
    .accentPalette('orange');
}