(function () {
  'use strict';

  angular.module('pfTest.employees')
    .service('employeesService', EmployeesService);

    EmployeesService.$inject = ['requestService'];
  function EmployeesService(requestService) {
    

    this.getEmployees = getEmployees;
    this.getEmployee = getEmployee;
    this.createEmployee = createEmployee;
    this.updateEmployee = updateEmployee;
    this.deleteEmployee = deleteEmployee;

    
    const employeeEntity = 'Employees';

    
    


    function getEmployees() {
      return requestService.getArray(employeeEntity);
    }

    function getEmployee(id) {
      return requestService.getObject(employeeEntity, id);
    }

    function createEmployee(employee) {
      return requestService.createObject(employeeEntity, employee);
    }

    function updateEmployee(employee) {
      return requestService.updateObject(employeeEntity, employee);
    }

    function deleteEmployee(id) {
      return requestService.deleteObject(employeeEntity, id);
    }
  }
})();