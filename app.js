"use strict"

const app = angular.module('flapperNews', ['ui.router']);

app.factory('posts', [function () {
  const o = {
    posts: []
  };
  return o;
}]);

app.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;

    // define function to create new posts with user input
    $scope.addPost = function () {
      // do not allow users to submit posts with empty title
      if (!$scope.title || $scope.title === '') {
        return;
      }

      // append new post to $scope.posts
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
      });
      $scope.title = '';
      $scope.link = '';
    };

    // define function to increase upvote count
    $scope.incrementUpvotes = function (post) {
      post.upvotes += 1;
    };
  }
]);


// configure angular router
app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // define `home` state
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

    // default to home page
    $urlRouterProvider.otherwise('home');
  }
]);
