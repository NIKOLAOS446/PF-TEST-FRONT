angular
    .module('pfTest.departments')
    .component('pfDepartment', {
      templateUrl: 'dummy/components/department/department.component.html',
      controller: EmployeeController
    });

  DepartmentController.$inject = [];
  function DepartmentController() {
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
