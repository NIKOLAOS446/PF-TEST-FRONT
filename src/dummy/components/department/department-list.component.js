(function () {
  "use strict";

  angular
    .module("pfTest.departments")
    .component("pfDepartmentList", {
      templateUrl: "dummy/components/department/department-list.component.html",
      controller: DepartmentListController,
      bindings: {
        onCreate: '&',
        onEdit: '&'
      }
    });

  DepartmentListController.$inject = ['$scope', 'common', 'departmentsService'];

  function DepartmentListController($scope, common, departmentsService) {
    const ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.onDelete = onDelete;
    ctrl.select = select;

    $scope.$on('refresh', refresh);

    function onInit() {
      loadDepartments();
    }

    function loadDepartments() {
      departmentsService.getDepartments()
        .then(data => {
          ctrl.departmentsArray = data;
        });
    }

    function refresh() {
      loadDepartments();
    }

    function onDelete(id) {
      departmentsService.deleteDepartment(id)
        .then(() => {
          refresh();
        });
    }

    function select(department) {
      if (!!department && common.isValidId(department.id)) {
        ctrl.onEdit({
          id: department.id
        });
      }
    }
  }
})();
