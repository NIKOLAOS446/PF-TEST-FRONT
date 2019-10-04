(function () {
  'use strict';

  angular
    .module('pfTest.dummy')
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: 'home',
        url: '/home',
        title: 'Home',
        component: 'pfHome'
      })
      .state({
        name: 'test',
        url: '/test',
        title: 'Test',
        component: 'pfTest'
      })
      .state({

        name: 'departments',

        url: '/departments',

        title: 'Departments',

        component: 'pfDepartmentList',

        isMenuItem: true,

        resolve: {

          onCreate: ['$state', $state => {

            return function () {

              $state.go('department');

            }

          }],

          onEdit: ['$state', 'common', ($state, common) => {

            return function (id) {

              if (common.isValidId(id)) {

                $state.go('department', {

                  id

                });

              }

            };

          }]

        }

      })
      .state({

        name: 'department',

        url: '/department/{id}',

        component: 'pfDepartmentDetail',

        resolve: {

          departmentId: ['$transition$', $transition$ => {

            console.warn($transition$.params());



            return $transition$.params().id;

          }],

          onAction: ['$state', $state => {

            return function () {

              $state.go('departments');

            }

          }]

        },

        params: {

          id: {

            type: 'int',

            value: 0,

            dynamic: true

          }

        }

      })
      /*.state({
        name: 'employeedepartmentrelation',
        url: '/employeedepartmentrealtion',
        title:'Employeedepartmentrelation',
        component: 'pfEmployeedepartmentrelation'
      })*/
      .state({

        name: 'employees',

        url: '/employees',

        title: 'Employees',

        component: 'pfEmployeeList',

        isMenuItem: true,

        resolve: {

          onCreate: ['$state', $state => {

            return function () {

              $state.go('employee');

            }

          }],

          onEdit: ['$state', 'common', ($state, common) => {

            return function (id) {

              if (common.isValidId(id)) {

                $state.go('employee', {

                  id

                });

              }

            };

          }]

        }

      })
      .state({

        name: 'employee',

        url: '/employee/{id}',

        component: 'pfEmployeeDetail',

        resolve: {

          employeeId: ['$transition$', $transition$ => {

            console.warn($transition$.params());



            return $transition$.params().id;

          }],

          onAction: ['$state', $state => {

            return function () {

              $state.go('employees');

            }

          }]

        },

        params: {

          id: {

            type: 'int',

            value: 0,

            dynamic: true

          }

        }

      })

    $urlRouterProvider.otherwise('home');
  }
})();