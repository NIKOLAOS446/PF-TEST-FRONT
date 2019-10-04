(function () {
  'use strict';

  angular
    .module('pfTest.employees')
    .component('pfEmployeeDetail', {
      templateUrl: 'dummy/components/employee/employee-detail.component.html',
      controller: EmployeeDetailsController,
      bindings: {
        employeeId: '<',
        onAction: '&'
      },
    });

  EmployeeDetailsController.$inject = ['common', 'logger', 'employeesService','modalService'];
  function EmployeeDetailsController(common, logger, employeesService,modalService ) {
    var ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;
    ctrl.onCreate = onCreate;
    ctrl.onUpdate = onUpdate;
    ctrl.onCancel = onCancel;
    ctrl.openModal = openModal;
    

    
    ctrl.employee = {};

    function onInit() {
      loadEmployees();
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
      }
    }

    function onCreate(event) {
      employeesService.createEmployee(ctrl.employee)
        .then(data => {
          ctrl.onAction();
        });
    }

    function onUpdate(event) {
      employeesService.updateEmployee(ctrl.employee)
        .then(data => {
          ctrl.onAction();
        });
    }
   

    function onCancel(event) {
      logger.warn('Cancel');
      console.warn(event);
      ctrl.onAction();
    }

    function openModal() {
      modalService.open('pfEmployeeModal')
        .then(() => {
          console.log('modal closed');
        })
        .catch(() => {
          console.log('modal disposed');
        });
    }
  
    
    
  }
})();