'use strict';

/**
 * @ngdoc function
 * @name cldnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cldnApp
 */
angular.module('cldnApp')
  .controller('PhotoUploadCtrl', function($scope, $rootScope, $routeParams, $location, Upload, cloudinary, IMGTAG,$http) {

      var database = firebase.database();

    $scope.uploadFiles = function(files){
      $scope.files = files;
      if (!$scope.files) return;
      angular.forEach(files, function(file){
        if (file && !file.$error) {
          file.upload = Upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload",
            data: {
              upload_preset: cloudinary.config().upload_preset,
              tags: IMGTAG,
              context: 'photo=' + $scope.title,
              file: file
            }
        }).progress(function (uploadingFile) {
            file.progress = Math.round((uploadingFile.loaded * 100.0) / uploadingFile.total);
            file.status = "업로딩 : " + file.progress + "%";
          }).success(function (data, status, headers, config) {
              console.log(data);
              database.ref('public_ids/' + data.public_id).set({
                 value:true
              });
            file.status = "업로드 완료!";
            // $rootScope.photos = $rootScope.photos || [];
            // data.context = {custom: {photo: $scope.title}};
            file.result = data;
            // $rootScope.photos.push(data);
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }
      });
    };
});
