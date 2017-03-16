angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  //Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('Registration', function($scope, $ionicModal, $timeout){
   //registration  modal
  $scope.registerData = {};
  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/playlists.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // Triggered in the register modal to close it
  $scope.closeRegister = function() {
    $scope.modal.hide();
  };
  // Open the register modal 
  $scope.register = function() {
    $scope.modal.show();
  }; 
  // Perform the register action when the user submits the login form  
  $scope.doRegister = function() {
    console.log('Doing Registeration', $scope.registerData);
    // Simulate a register delay
    $timeout(function() {
      $scope.closeRegister();
    },1000);
  };
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('mycontroller2', function ($scope, $http){
            $scope.sentimentCheck = function(){
                var emo = $scope.homedata;
                var callback =$http.get('http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment?apikey=49d42a08b29490c409f92d6389f3292afce91968&outputMode=json&text='+emo);
                callback.success(function (data) {
                    if(data!=null && data.docSentiment!=null)
                    {
                        $scope.output1 = "Sentiment score" + data.docSentiment.score;
                        $scope.output2 = "Sentiment Type" + data.docSentiment.type;
                    }
                })
               
            }
})
.controller('mycontroller1', function ($scope, $http){
                var s;
                $scope.converttoSpeech = function(){
                 var text=$scope.homedata;
                 var recipe=$http.get("https://api.edamam.com/search?q="+text+"&app_id=a32318f8&app_key=f00150f5f9b9a2228b5ad2d4b899d6fd&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free");
                 //document.getElementById("audio").innerHTML="recipe name="+data.hits[0].recipe.label;
                recipe.success(function (data) {
                    if(data!=null)
                    {
                        $scope.recipename="recipe name:"+data.hits[0].recipe.label;
                        $scope.image= data.hits[0].recipe.image;
                        s=data.hits[0].recipe.url;
                    }
                
            })}
            $scope.view = function(){
                 var url = s ;
                var target = '_blank';
                var options = "location=yes"
                var ref = cordova.InAppBrowser.open(url, target, options);
            }                                         });