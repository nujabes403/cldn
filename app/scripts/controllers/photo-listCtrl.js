'use strict';

/**
 * @ngdoc function
 * @name cldnApp.controller:PhotoListctrlCtrl
 * @description
 * # PhotoListctrlCtrl
 * Controller of the cldnApp
 */
angular.module('cldnApp')
  .controller('PhotoListCtrl', function ($scope,$http,$timeout) {

      firebase.database().ref('public_ids').on('value',function(snapshot){
          $scope.photos = [];
          snapshot.forEach(function(childSnapshot){
            $scope.photos.push({'public_id':childSnapshot.key});
          });
          $timeout(function(){
              console.log("UPDATE ANGULAR UI");
          });
      });

      $scope.deleteImg = function(public_id){
          $http.post('/delete',{'public_id' : public_id}).success(function(data,status){
                firebase.database().ref('public_ids/' + public_id).remove();
                console.log("Delete Public ID : " + public_id);
                console.log(data);
              }).error(function(data,status){
                  console.log("Error : " + data);
              });
      }
});
