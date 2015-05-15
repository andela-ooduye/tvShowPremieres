// Defining the controller of the Angular Application
var app = angular.module("tvShowApp", ["ngStorage"]);
app.controller("MainController", function($scope, $localStorage) {

  $scope.messages = $localStorage.message || [];
  // Creating a function that data from the Modal and saves it into the Local Storage
  $scope.save = function() {
    var messageCollection = {
      'position' : $scope.messages.length,
      'title' : $scope.store.title,
      'imageURL' : $scope.store.imageURL,
      'plot' : $scope.store.plot,
      'showDate' : $scope.store.showDate,
      'stationShown' : $scope.store.stationShown,
      'showSeason' : $scope.store.showSeason,
      'showGenre' : $scope.store.showGenre,
      'showRating' : $scope.store.showRating
    }; // Creating an object that stores the data gotten from Modal
    $scope.messages.push(messageCollection); // Adding the object created into the array holding all the objects
    $localStorage.message = $scope.messages; // Inserting the array of objects into the Local Storage
    $scope.load(); 
    $scope.reset();
    $('#closeAddModal').click(); // closes the Modal
  }
  // Creating a function that empties all the fields in the Modal
  $scope.reset = function(){
    $scope.store.title = '';
    $scope.store.imageURL = '';
    $scope.store.plot = '';
    $scope.store.showDate = '';
    $scope.store.stationShown = '';
    $scope.store.showSeason = '';
    $scope.store.showGenre = '';
    $scope.store.showRating = '';
  }
  // Creating a function that edits the data in the local storage with respect to the index location of the data
  $scope.edit = function(index){
    $scope.editing = $localStorage.message[index];
  }
  // Creating a function that closes the Edit Modal
  $scope.saveEdit = function(index){
    $('#closeEditModal').click();
  }
// Creating a function that binds the data in the local storage to a model
  $scope.load = function() {
    $scope.messages = $localStorage.message;
  }
  // Creating a function that deletes a particular object in the array stored in the local storage
  $scope.delete = function(index) {
    var delConfirm = confirm("Are you sure you want to delete this message?");
    if (delConfirm === true){ 
      $localStorage.message.splice(index, 1); // Deletes the an object in the local storage with respect to its index location
      for (x in $localStorage.message.position) {
        $localStorage.message[x].position = x;
      } // Reassigns the position of the index in the local storage after an object has been deleted
    }
  }
});