myApp.controller('PeopleController', ['$http', function($http) {
    var vm = this;      //vm - view model
    vm.newPerson = {};

    getPeople();

    vm.addPerson = function(){
      console.log('add person:', vm.newPerson);
      //POST request
      $http.post('/person', vm.newPerson)
        .then(function(response){
          console.log('added person:', response);
          getPeople();
        });
    };

    function getPeople(){
      //GET requests
      $http.get('/person')
      .then(function(response){
        // console.log('People received: ', response.data);
        console.log('People displayed.');
        vm.people = response.data;
      });
    }

    vm.updatePerson = function(id) {
      console.log('update person w/ id: ' + id);
      var data = {location: 'Idaho'};
      $http.put('/person/' + id, data)
        .then(function(response){
          getPeople();
        });
    };

    vm.deletePerson = function(id) {
      console.log('delete person w/ id: ' + id);
      $http.delete('/person/' + id)
        .then(function(response){
          getPeople();
        });
    };

    // Add 100 internet points to selected person
    vm.addInternetPoints = function(id, internetPoints) {
      console.log('Adding 100 pts to person w/ id: ' + id);
      var data = {internetPoints: internetPoints + 100};
      $http.put('/person/addPoints/' + id, data)
        .then(function(response){
          console.log("Points were added.");
          getPeople();
        });
    };

}]); //end of controller
