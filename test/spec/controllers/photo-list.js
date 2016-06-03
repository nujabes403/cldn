'use strict';

describe('Controller: PhotoListctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('cldnApp'));

  var PhotoListctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotoListctrlCtrl = $controller('PhotoListctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhotoListctrlCtrl.awesomeThings.length).toBe(3);
  });
});
