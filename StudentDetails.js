var app = angular.module("studentApp", []);
app.controller("MainController", function ($scope) {
  $scope.students = [];

  $scope.displayStudents = function () {
    $scope.students = generateStudentDetails($scope.numStudents);
  };

  // Function to generate student details
  function generateStudentDetails(num) {
    var students = [];
    for (var i = 1; i <= num; i++) {
      var student = {
        name: "Student " + i,
        cgpa: generateRandomCGPA(),
      };
      students.push(student);
    }
    return students;
  }

  // Function to generate random CGPA between 2.0 and 10.0
  function generateRandomCGPA() {
    return (Math.random() * (10.0 - 2.0) + 2.0).toFixed(2);
  }
});
