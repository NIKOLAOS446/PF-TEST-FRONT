(function () {
  'use strict';

  angular.module('pfTest.employeedepartmentrelations')
    .service('emdsService', EmdsService);

    EmdsService.$inject = ['requestService'];
  function EmdsService(requestService) {
    

    this.getEmployeedepartmentrelations = getEmployeedepartmentrelations;
    this.getEmployeedepartmentrelation = getEmployeedepartmentrelation;
    this.createEmployeedepartmentrelation = createEmployeedepartmentrelation;
    this.updateEmployeedepartmentrelation = updateEmployeedepartmentrelation;
    this.deleteEmployeedepartmentrelation = deleteEmployeedepartmentrelation;

    
    const employeedepartmentrelationEntity = 'EmployeeDepartmentRelations';

    
    


    function getEmployeedepartmentrelations() {
      return requestService.getArray(employeedepartmentrelationEntity);
    }

    function getEmployeedepartmentrelation(id) {
      return requestService.getObject(employeedepartmentrelationEntity, id);
    }

    function createEmployeedepartmentrelation(employeedepartmentrelation) {
      return requestService.createObject(employeedepartmentrelationEntity, employeedepartmentrelation);
    }

    function updateEmployeedepartmentrelation(employeedepartmentrelation) {
      return requestService.updateObject(employeedepartmentrelationEntity, employeedepartmentrelation);
    }

    function deleteEmployeedepartmentrelation(id) {
      return requestService.deleteObject(employeedepartmentrelationEntity, id);
    }
  }
})();