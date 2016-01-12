'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    
  ];

  isCollapsed = true;
  //end-non-standard

  constructor($anchorScroll,$location,$scope) {
    
  }

}

angular.module('jamesonwparkerApp')
  .controller('NavbarController', NavbarController);
