(function () {
  "use strict";

  angular
    .module("pfTest.employeedepartmentrelations")
    .component("pfEmdList", {
      templateUrl: "dummy/components/employeedepartmentrelation/emd-list.component.html",
      controller: EmdListController,
      bindings: {
        onCreate: '&',
        onEdit: '&'
      }
    });

  EmdListController.$inject = ['$scope', 'common', 'emdsService'];

  function EmdListController($scope, common, emdsService) {
    const ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.onDelete = onDelete;
    ctrl.select = select;

    $scope.$on('refresh', refresh);

    function onInit() {
      loadEmployeedepartmentrelations();
    }

    function loadEmployeedepartmentrelations() {
      emdsService.getEmployeedepartmentrelations()
        .then(data => {
          ctrl.employeedepartmentrelationsArray = data;
        });
    }

    function refresh() {
      loadEmployeedepartmentrelations();
    }

    function onDelete(id) {
      emdsService.deleteEmployeedepartmentrelation(id)
        .then(() => {
          refresh();
        });
    }

    function select(employeedepartmentrelation) {
      if (!!employeedepartmentrelation && common.isValidId(employeedepartmentrelation.Id)) {
        ctrl.onEdit({
          id: employeedepartmentrelation.Id
        });
      }
    }
  }
})();
