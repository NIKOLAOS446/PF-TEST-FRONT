(function () {
  'use strict';

  angular.module('pfTest.departments')
    .service('departmentsService', DepartmentsService);

    DepartmentsService.$inject = ['requestService'];
  function DepartmentsService(requestService) {
    

    this.getDepartments = getDepartments;
    this.getDepartment = getDepartment;
    this.createDepartment = createDepartment;
    this.updateDepartment = updateDepartment;
    this.deleteDepartment = deleteDepartment;

    
    const departmentEntity = 'Departments';

    
    


    function getDepartments() {
      return requestService.getArray(departmentEntity);
    }

    function getDepartment(id) {
      return requestService.getObject(departmentEntity, id);
    }

    function createDepartment(department) {
      return requestService.createObject(departmentEntity, department);
    }

    function updateDepartment(department) {
      return requestService.updateObject(departmentEntity, department);
    }

    function deleteDepartment(id) {
      return requestService.deleteObject(departmentEntity, id);
    }
  }
})();