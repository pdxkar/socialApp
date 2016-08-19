//create our app module
var app = angular.module('app', [])

//create the PostsCtrl module
//dependency inject $scope
app.controller('PostsCtrl', function ($scope, PostsSvc){

	//the function runs when the "Add Post" button is clicked
	$scope.addPost = function(){
		//Only add a post if there is a body
		if($scope.postBody){
			//unshift a new post into $scope.posts
			//$http.post('/api/posts', {
			PostsSvc.create({
				username: 'irocbigtime',
				body: $scope.postBody
			}).success(function(post){
				$scope.posts.unshift(post)
				//clear out the input field
				$scope.postBody = null
			})
		}
	}

//	//starting data
//	$http.get('http://localhost:3000/api/posts')
//	.success(function (posts){
//		$scope.posts = posts
//	})
	PostsSvc.fetch().success(function(posts){
		$scope.posts = posts
	})
})

app.service('PostsSvc', function ($http){
	this.fetch = function(){
		return $http.get('/api/posts')
	}
	this.create = function(post) {
		return $http.post('/api/posts', post)
	}
})
