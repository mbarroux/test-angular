'use strict';

describe('app.view1 module', function() {

  beforeEach(module('app.view1'));

  describe('drivers controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('DriversCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});