'use strict';

(function() {

class MainController {

  constructor($stateParams) {
  	
    this.selectedSection = $stateParams.section;

  	this.sections = [
  		{
  			'section':'about',
  			'template':'/assets/content/about.html'
  		},
  		{
  			'section':'programming',
  			'template':'/assets/content/programming.html'

  		},
  		{
  			'section':'photography',
  			'template':'/assets/content/photography.html'
  		}
  	];
  }


}

angular.module('jamesonwparkerApp')
  .controller('MainController', MainController);

})();
