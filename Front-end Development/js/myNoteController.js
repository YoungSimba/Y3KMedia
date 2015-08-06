// JavaScript Document
app.controller("myNoteController", function($scope){
	$scope.msg = "";
	$scope.left = function(){return 100 - $scope.message.length;};
	$scope.save = function(){alert("Comment Sent!");};
	$scope.clear = function(){$scope.msg = "";};
});