angular
    .module('pfTest.employeedepartmentrelations')
    .component('pfEmployeedepartmentrelation', {
      templateUrl: 'dummy/components/employeedepartmentrelation/employeedepartmentrelation.component.html',
      controller: EmployeedepartmentController
    });

  EmployeedepartmentController.$inject = [];
  function EmployeedepartmentController() {
    const $ctrl = this;
    $ctrl.$onInit = onInit;
    $ctrl.$onChanges = onChanges;
    $ctrl.$onDestroy = onDestroy;


    ////////////////

    function onInit() {

    }

    function onChanges(changesObj) {

    }

    function onDestroy() {

    }
  }