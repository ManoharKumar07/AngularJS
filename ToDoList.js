var app = angular.module("todoApp", []);
app.controller("MainController", function ($scope) {
  $scope.tasks = [{ name: "Task 1" }, { name: "Task 2" }, { name: "Task 3" }];

  $scope.addTask = function () {
    if ($scope.newTask !== "") {
      $scope.tasks.push({ name: $scope.newTask });
      $scope.newTask = "";
    }
  };

  $scope.updateTask = function (task) {
    if (task.name === "") {
      $scope.deleteTask(task);
    }
  };

  $scope.deleteTask = function (task) {
    var index = $scope.tasks.indexOf(task);
    if (index !== -1) {
      $scope.tasks.splice(index, 1);
    }
  };
});
