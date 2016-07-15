'use strict';

describe('Controller: BotCtrl', function () {

  // load the controller's module
  beforeEach(module('happybotsApp'));

  var BotCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BotCtrl = $controller('BotCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BotCtrl.awesomeThings.length).toBe(3);
  });
});
