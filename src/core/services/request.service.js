(function () {
  'use strict';

  angular.module('pfTest.core')
    .service('requestService', RequestService);

  RequestService.$inject = ['$http', 'common', 'toastr', 'apiUrl'];
  function RequestService($http, common, toastr, apiUrl) {
    this.getArray = getArray;
    this.getObject = getObject;
    this.createObject = createObject;
    this.updateObject = updateObject;
    this.deleteObject = deleteObject;

    function validateEntity(entity) {
      if (!entity || typeof entity !== 'string') {
        throw new Error('Invalid Entity');
      }
    }

    function validateId(id) {
      if (!common.isValidId(id)) {
        throw new Error('Invalid ID');
     }
    }

    function validateObject(obj, create) {
      if (!obj || typeof obj !== 'object'
        && ((!!create && !common.isValidId(obj.Id)) || (!create && common.isValidId(obj.Id)))) {
        throw new Error('Invalid object')
      }
    }

    function catchHttpEntityError(entity, error) {
      if (error) {

      }
    }

    function getArray(entity) {
      validateEntity(entity);

      return $http.get(`${apiUrl}/${entity}`)
        .then(response => {
          if (!!response && !!response.data && angular.isArray(response.data)) {
            return response.data;
          }

          return [];
        }).catch(error => {
          catchHttpError(error);
        });
    }

    function getObject(entity, id) {
      validateEntity(entity);
      validateId(id);

      return $http.get(`${apiUrl}/${entity}/${id}`)
        .then(response => {
          if (!!response && !!response.data && typeof response.data === 'object') {
            const obj = response.data;

            // Remove @odata object properties
            for (let property in obj) {
              if (property.startsWith('@odata')) {
                delete obj[property];
              }
            }

            return obj;
          }

          return null;
        }).catch(error => {
          catchHttpError(error);
        });
    }

    function createObject(entity, obj) {
      validateEntity(entity);
      validateObject(obj, true);

      return $http.post(`${apiUrl}/${entity}`, obj)
        .then(response => {
          if (!!response && !!response.data && typeof response.data === 'object') {
            toastr.success(`Entity: "${entity}" with ID: "${response.data.id}" successfully created`);

            return response.data;
          }

          throw new Error(`Error on create entity: "${entity}"`);
        }).catch(error => {
          catchHttpError(error);
        });
    }

    function updateObject(entity, obj) {
      validateEntity(entity);
      validateObject(obj, false);

      return $http.post(`${apiUrl}/${entity}`, obj)
        .then(response => {
          if (!!response && !!response.data && typeof response.data === 'object') {
            toastr.warning(`Entity: "${entity}" with ID: "${response.data.id}" successfully updated`);

            return response.data;
          }

          throw new Error(`Error on update entity: "${entity}" with ID: "${obj.id}"`);
        }).catch(error => {
          catchHttpError(error);
        });
    }

    function deleteObject(entity, id) {
      validateEntity(entity);
      validateId(id);
      return $http.delete(`${apiUrl}/${entity}/${id}`)
        .then(response => {
          if (response.status === 204) {
            toastr.warning(`Entity: "${entity}" with ID: "${id}" successfully delete`);
          }
        })
        .catch(error => {
          catchHttpError(error);
        });
    }
  }
})();