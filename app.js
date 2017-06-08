"use strict"

const app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 13},
      {title: 'post 4', upvotes: 4},
      {title: 'post 5', upvotes: 7},
    ];
    $scope.addPost = function () {
      // do not allow users to submit posts with empty title
      if (!$scope.title || $scope.title === '') {
        return;
      }

      // append new post to $scope.posts
      $scope.posts.push({title: $scope.title, upvotes: 0});
      $scope.title = '';
    };
  }
]);
