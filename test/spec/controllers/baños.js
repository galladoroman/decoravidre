'use strict';

describe('Controller: BaOsCtrl', function () {

  // load the controller's module
  beforeEach(module('decoravidreApp'));

  var BaOsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BaOsCtrl = $controller('BaOsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BaOsCtrl.awesomeThings.length).toBe(3);
  });
});
