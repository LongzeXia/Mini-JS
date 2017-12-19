
// angular.module('myApp',['ngRoute'])



 // angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
var phonecatApp = angular.module('starter', ['services'])
// phonecatApp.run(function($ionicPlatform,$rootScope) {
//   $rootScope.host = "http://localhost:101/";
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
    
//     if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//       cordova.plugins.Keyboard.disableScroll(true);

//     }
//     if (window.StatusBar) {
//       // org.apache.cordova.statusbar required
//       StatusBar.styleLightContent();
//     }
//   });
// })
// phonecatApp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
//   $stateProvider
// phonecatApp.state('Details', {
//                 url: '/detail?index',    //以？为标识接收参数
//                 templateUrl: './detail.html',
//                 controller:'detail'     //也可以用 params:{'phone':{}}
//  })


phonecatApp.controller('home',function($scope,$rootScope,Foods){
 // $scope.catagory=[{"dairy},{seafood},{vegetable},{cereals},{fruit},{meat}];
 $scope.catagory=["dairy","seafood","vegetable","cereals","fruit","meat"];

 $scope.foods = Foods.all();
 $scope.id=0;
 var activetag =6;
 // $scope.activetag=null;
$scope.cata=function(index){
// $scope.id=
// var catatag="."+$scope.catagory[index]+"tag"
// console.log(catatag);
 $scope.activetag = index;
 $scope.foods = Foods.getcate($scope.catagory[index]);
// activetag = index;
// $scope.foodfiltertag=$scope.catagory[index];
}
// $scope.catagory

// $scope.foodfilter=function(id){
// $scope.food=Foods.get(id);
// if ($scope.food.category == $scope.catagory[activetag]){
//   console.log($scope.catagory[activetag]);
// // console.log($scope.food);
// console.log(id);
//   return $scope.food.category;

// } else {
//   return null;
// }

// }



 })


// end run / module