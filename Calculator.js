var app = angular.module("calculatorApp", []);
app.controller("CalculatorController", function ($scope) {
  $scope.input1 = 0;
  $scope.input2 = 0;
  $scope.result = undefined;
  $scope.calculate = function () {
    switch ($scope.operator) {
      case "add":
        $scope.result = $scope.input1 + $scope.input2;
        break;
      case "subtract":
        $scope.result = $scope.input1 - $scope.input2;
        break;
      case "multiply":
        $scope.result = $scope.input1 * $scope.input2;
        break;
      case "divide":
        if ($scope.input2 !== 0) {
          $scope.result = $scope.input1 / $scope.input2;
        } else {
          $scope.result = "Cannot divide by zero";
        }
        break;
      default:
        $scope.result = undefined;
        break;
    }
  };
});
