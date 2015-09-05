angular.module('camperNews', [])
  .controller('storyCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.stories = [];

    $http.get('http://www.freecodecamp.com/news/hot')
      .success(function(response) {
        response.forEach(function(story) {
          commentLink = story.storyLink.replace(/\s/g, '-');
          if (story.image === "") {
            story.image = story.author.picture;
          }
          story.numUpVotes = story.upVotes.length;
          $scope.stories.push({
            'storyLink': commentLink,
            'image': story.image,
            'link': story.link,
            'numUpVotes': story.numUpVotes,
            'headline': story.headline
          });
        });
      })
      .error(function(err) {
        alert(err);
      });
  }]);