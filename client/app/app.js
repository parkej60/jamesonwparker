(function() {
    'use strict';

    angular.module('jamesonwparkerApp', [
      'jamesonwparkerApp.constants',
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ui.router',
      'ui.bootstrap',
      'ngAnimate'
    ])
    .config(routeConfig);

    function routeConfig($stateProvider,$urlRouterProvider,$locationProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('root', {
          url: '/:section',
          views: {
            'content': {
              templateUrl: 'app/layout/main/main.html',
              controller: 'MainController',
              controllerAs: 'vm'
            }
          }
        })

        $locationProvider.html5Mode(true);
    }
})();

