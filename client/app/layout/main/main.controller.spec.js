'use strict';

describe('Controller: MainController', function() {

  // load the controller's module
  beforeEach(module('jamesonwparkerApp'));
  beforeEach(module('stateMock'));

  var scope;
  var MainController;
  var state;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, $state) {

    scope = $rootScope.$new();
    state = $state;
    MainController = $controller('MainController', {
      $scope: scope
    });
  }));

  it('Should have sections', function() {
    expect(MainController.sections.length).toBe(3);
  });
});
