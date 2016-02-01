'use strict';

describe('Controller: CocinasCtrl', function () {

  // load the controller's module
  beforeEach(module('decoravidreApp'));

  var CocinasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CocinasCtrl = $controller('CocinasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CocinasCtrl.awesomeThings.length).toBe(3);
  });
});
