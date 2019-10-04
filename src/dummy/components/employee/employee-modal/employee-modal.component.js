(function () {
  'use strict';

  angular
    .module('pfTest.employees')
    .component('pfEmployeeModal', {
      templateUrl: 'dummy/components/employee/employee-modal/employee-modal.component.html',
      controller: EmployeeModalController,
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&',
        EmployeeId: '<',
        onAction: '&'
      }
    });

  EmployeeModalController.$inject = ['$scope','common','emdsService','employeesService','departmentsService'];
  function EmployeeModalController($scope,common,emdsService,employeesService,departmentsService) {
    var ctrl = this;
    const $ctrl = this;
    $ctrl.$onInit = onInit;
    $ctrl.$onChanges = onChanges;
    $ctrl.$onDestroy = onDestroy;
    ctrl.onCreate = onCreate;
    ctrl.onCancel = onCancel;
    
    ctrl.employeedepartmentrelation = {};
    ctrl.employee = {};
    ////////////////

    function onInit() {
     employeesService.getEmployees().then(data=>{
      ctrl.employeesArray=data;
departmentsService.getDepartments().then(data=>{
  ctrl.departmentsArray=data
})

     });
      
    }
    
      
    
     
       
     
    

    function onChanges(changesObj) {
      if (!!changesObj.employeeId) {
        const id = changesObj.employeeId.currentValue;
        if (common.isValidId(id)) {
          employeesService.getEmployee(changesObj.employeeId.currentValue)
            .then(data => {
              ctrl.employee = data;
            });
          }
        }    }

    function onDestroy() {

    }

    function onCancel(event) {
      logger.warn('Cancel');
      console.warn(event);
      ctrl.onAction();
    }
    
    function onCreate(event) {
      emdsService.createEmployeedepartmentrelation(ctrl.employeedepartmentrelation)
        .then(data => {
          ctrl.onAction();
        });
    }
    
  }
})();