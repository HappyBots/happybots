'use strict';

describe('Controller: WipCtrl', function () {

  // load the controller's module
  beforeEach(module('happybotsApp'));

  var WipCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WipCtrl = $controller('WipCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WipCtrl.awesomeThings.length).toBe(3);
  });
});
