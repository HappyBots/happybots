'use strict';

describe('Service: botsData', function () {

  // load the service's module
  beforeEach(module('happybotsApp'));

  // instantiate service
  var botsData;
  beforeEach(inject(function (_botsData_) {
    botsData = _botsData_;
  }));

  it('should do something', function () {
    expect(!!botsData).toBe(true);
  });

});
