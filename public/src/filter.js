angular.module('ContactsApp')
    .filter('labelCase', function () {
        return function (input) {
            input = input.replace(/([A-Z])/g, ' $1'); // Replaces A-Z with second parameter
            return input[0].toUpperCase() + input.slice(1); // Capitalize first letter and concatenate to the string except the first letter
        };
    })
    .filter('camelCase', function () {
        return function (input) {
            return input.toLowerCase().replace(/ (\w)/g, function (match, letter) {
                return letter.toUpperCase();
            });
        };
    })
    .filter('keyFilter', function () {
        return function (obj, query) {
            var result = {};
            angular.forEach(obj, function (val, key) {
                if (key !== query) {
                    result[key] = val;
                }
            });
            return result;
        };
    });