(function () {
  "use strict";

  angular
    .module("pfTest.employees")
    .component("pfEmployeeList", {
      templateUrl: "dummy/components/employee/employee-list.component.html",
      controller: EmployeesListController,
      bindings: {
        onCreate: '&',
        onEdit: '&'
      }
    });

  EmployeesListController.$inject = ['$scope', 'common', 'employeesService'];

  function EmployeesListController($scope, common, employeesService) {
    const ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.onDelete = onDelete;
    ctrl.select = select;

    $scope.$on('refresh', refresh);

    function onInit() {
      loadEmployees();
    }

    function loadEmployees() {
      employeesService.getEmployees()
        .then(data => {
          ctrl.employeesArray = data;
        });
    }

    function refresh() {
      loadEmployees();
    }

    function onDelete(id) {
      employeesService.deleteEmployee(id)
        .then(() => {
          refresh();
        });
    }

    function select(employee) {
      if (!!employee && common.isValidId(employee.Id)) {
        ctrl.onEdit({
          id: employee.Id
        });
      }
    }
  }
})();
