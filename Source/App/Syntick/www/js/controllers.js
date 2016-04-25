angular.module('syntickApp.controllers', [])

.controller('ComplainsCtrl', function($scope) {

})

.controller('ComplainDetailCtrl', function($scope) {
  console.log('Controller');
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
