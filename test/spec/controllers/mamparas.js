'use strict';

describe('Controller: MamparasCtrl', function () {

  // load the controller's module
  beforeEach(module('decoravidreApp'));

  var MamparasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MamparasCtrl = $controller('MamparasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MamparasCtrl.awesomeThings.length).toBe(3);
  });
});
