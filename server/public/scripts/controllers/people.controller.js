myApp.controller('PeopleController', ['$http', function($http) {
    var vm = this;      //vm - view model
    vm.newPerson = {};

    vm.addPerson = function(){
      console.log('add person');
      //POST request
      $http.post('/person', vm.newPerson)
        .then(function(response){
          console.log('added peson:', response);
        });
    };

}]); //end of controller
