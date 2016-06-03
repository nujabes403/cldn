'use strict';

/**
 * @ngdoc service
 * @name cldnApp.photoService
 * @description
 * # photoService
 * Factory in the cldnApp.
 */
angular.module('cldnApp')
//   From image server, the photos tagged by value of IMGTAG is loaded only.
.value('IMGTAG','outletImg')
  .factory('photoService', function ($resource,cloudinary,IMGTAG) {
      var url = cloudinary.url(IMGTAG,{format:'json',type:'list'});
      console.log(url);
      return $resource(url, {}, {
          loadPhotos: {method: 'GET', isArray:false}
      });
  });
