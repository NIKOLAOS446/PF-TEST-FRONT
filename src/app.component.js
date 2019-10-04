(function () {
  'use strict';

  angular
    .module('pfTest')
    .component('app', {
      templateUrl: 'app.component.html',
      controller: AppController
    });

  AppController.$inject = [];
  function AppController() {
    const $ctrl = this;
    $ctrl.$onInit = onInit;
    $ctrl.$onChanges = onChanges;
    $ctrl.$onDestroy = onDestroy;

    ////////////////

    $ctrl.title = 'Profile Test';

    ////////////////

    function onInit() {

    }

    function onChanges(changesObj) {

    }

    function onDestroy() {

    }
  }
})();