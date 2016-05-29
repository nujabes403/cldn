'use strict';

/**
 * @ngdoc function
 * @name cldnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cldnApp
 */
angular.module('cldnApp')
  .controller('PhotoListCtrl', function (IMGTAG,cloudinary) {
      console.log("클라우드 이름 : " + cloudinary.config().cloud_name);
      console.log("업로드 프리셋 이름 : " + cloudinary.config().upload_preset);
      console.log("불러온 이미지 태그 : " +  IMGTAG);
  });
