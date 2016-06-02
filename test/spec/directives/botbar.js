'use strict';

describe('Directive: botBar', function () {

  // load the directive's module
  beforeEach(module('happybotsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bot-bar></bot-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the botBar directive');
  }));
});
