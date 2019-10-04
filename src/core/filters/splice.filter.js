(function () {
  'use strict';

  angular.module('pfTest.core')
    .filter('splice', Splice);

  function Splice() {
    return SpliceFilter;

    function SpliceFilter(array, indexFrom, indexTo) {
      if (!angular.isArray(array) || array.length <= 0
        || typeof indexFrom !== 'number'
        || typeof indexTo !== 'number' || indexFrom <= 0 || indexFrom > indexTo
        || indexFrom >= array.length) {
        return [];
      }

      if (indexTo >= array.length) {
        indexTo = array.length - 1;
      }

      const result = [];

      for (let i = indexFrom; i <= indexTo; i++) {
        result.push(array[i]);
      }

      return result;
    }
  }
})();