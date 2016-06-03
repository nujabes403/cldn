'use strict';

/**
 * @ngdoc overview
 * @name cldnApp
 * @description
 * # cldnApp
 *
 * Main module of the application.
 */
angular
  .module('cldnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'cloudinary',
    'ngFileUpload',
    'firebase',
  ])
  .config(function (cloudinaryProvider,$routeProvider) {
       // Initialize Firebase
       var firebase_config = {
         apiKey: "AIzaSyDpQcXly7_7OzEM6mV3epp2E6O1veDr1UQ",
         authDomain: "cldn.firebaseapp.com",
         databaseURL: "https://cldn.firebaseio.com",
         storageBucket: "project-6745544484729731893.appspot.com",
       };
       firebase.initializeApp(firebase_config);

    //   cloudinary setting
      cloudinaryProvider
      .set("cloud_name", "dxmiqvbcr")
      .set("upload_preset", "ifwokgrf");
    //   route setting
    $routeProvider
      .when('/photos', {
        templateUrl: 'views/photo-list.html',
        controller: 'PhotoListCtrl',
        // resolve: {
        //     photoList: function($q,$rootScope,photoService){
        //         if(!$rootScope.photosLoaded){
        //             return photoService.loadPhotos({},function(data){
        //                 $rootScope.photosLoaded = true;
        //                 $rootScope.photos = data.resources;
        //             });
        //         } else{
        //             return $q.when(true);
        //         }
        //     }
        // }
      })
      .when('/photos/new', {
        templateUrl: 'views/photo-upload.html',
        controller: 'PhotoUploadCtrl',
      })
      .otherwise({
        redirectTo: '/photos'
      });
  });
