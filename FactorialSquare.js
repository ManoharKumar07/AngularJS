var app = angular.module("mathApp", []);
app.controller("MathController", function ($scope) {
  $scope.inputNumber = 0;
  $scope.factorial = undefined;
  $scope.square = undefined;
  $scope.calculateFactorial = function () {
    if ($scope.inputNumber >= 0) {
      $scope.factorial = getFactorial($scope.inputNumber);
    } else {
      $scope.factorial = undefined;
    }
  };
  $scope.calculateSquare = function () {
    $scope.square = $scope.inputNumber * $scope.inputNumber;
  };
  function getFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * getFactorial(n - 1);
    }
  }
});
