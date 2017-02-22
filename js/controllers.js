angular.module('starter.controllers', [])  // Création d'un module

.controller('DashCtrl', function($scope, $ionicModal) { // Lancement de la fonction controller qui est appeller au lancement de SA route

  $scope.MikeMike = "test";

  $ionicModal.fromTemplateUrl('templates/my-modal.html', { // Initialisation de la modal
    scope: $scope, // Affectation des varibles definie dans le $scope (Tout varibles definie dans le scope, sont utilisable dans la modal)
    animation: 'slide-in-up' // Definition de l'animation d'affichage de la modal
  }).then(function(modal) {
    $scope.Mike = modal; // Affecter la modal à une varible pour faire appelle à cette dernier
  });
  $scope.openModal = function() {
    $scope.Mike.show(); // Afficher la modal
  };
  $scope.closeModal = function() {
    $scope.Mike.hide(); // Cacher la modal
  }; 

    $ionicModal.fromTemplateUrl('templates/my-modal-2.html', { // Initialisation de la modal
    scope: $scope, // Affectation des varibles definie dans le $scope (Tout varibles definie dans le scope, sont utilisable dans la modal)
    animation: 'slide-in-up' // Definition de l'animation d'affichage de la modal
  }).then(function(modal2) {
    $scope.test = modal2; // Affecter la modal à une variable pour faire appelle à cette dernier
  });
  $scope.openModal2 = function() {
    $scope.test.show(); // Afficher la modal
  };
  $scope.closeModal2 = function() {
    $scope.test.hide(); // Cacher la modal
  }; 

})




.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }


.controller('MikeCtrl', function($scope) {
    $scope.name ="";

  });




});
