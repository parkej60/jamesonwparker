'use strict';

(function() {

class FooterController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }
}

angular.module('jamesonwparkerApp')
  .controller('FooterController', FooterController);

})();