var app = angular.module("shoppingListApp", []);
app.controller("ShoppingListController", function ($scope) {
  // Default list of items
  $scope.items = ["Apples", "Bananas", "Bread", "Milk"];
  // Function to add new item to the list
  $scope.addItem = function () {
    if ($scope.newItem) {
      $scope.items.push($scope.newItem);
      $scope.newItem = ""; // Clear input after adding item
    }
  };
  // Function to remove item from the list
  $scope.removeItem = function (index) {
    $scope.items.splice(index, 1);
  };
});
