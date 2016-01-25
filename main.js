angular.module('siftSorter', []);
var mainController = function($scope) {
	$scope.findWord = "";
	$scope.articleTxt = "";
	$scope.articleTxt = $scope.articleTxt.replace(/1|2|3|4|5|6|7|8|9|0|-|=/gi, "");
$scope.articleTxt = $scope.articleTxt.replace("!", "");
$scope.articleTxt = $scope.articleTxt.replace("@", "");
$scope.articleTxt = $scope.articleTxt.replace("#", "");
$scope.articleTxt = $scope.articleTxt.replace("$", "");
$scope.articleTxt = $scope.articleTxt.replace("%", "");
$scope.articleTxt = $scope.articleTxt.replace("^", "");
$scope.articleTxt = $scope.articleTxt.replace("&", "");
$scope.articleTxt = $scope.articleTxt.replace("*", "");
$scope.articleTxt = $scope.articleTxt.replace("(", "");
$scope.articleTxt = $scope.articleTxt.replace(")", "");
$scope.articleTxt = $scope.articleTxt.replace("_", "");
$scope.articleTxt = $scope.articleTxt.replace("+", "");
$scope.articleTxt = $scope.articleTxt.replace("[", "");
$scope.articleTxt = $scope.articleTxt.replace("{", "");
$scope.articleTxt = $scope.articleTxt.replace("]", "");
$scope.articleTxt = $scope.articleTxt.replace("}", "");
$scope.articleTxt = $scope.articleTxt.replace("|", "");
$scope.articleTxt = $scope.articleTxt.replace(";", "");
$scope.articleTxt = $scope.articleTxt.replace(":", "");
$scope.articleTxt = $scope.articleTxt.replace("'", "");
$scope.articleTxt = $scope.articleTxt.replace('"', "");
$scope.articleTxt = $scope.articleTxt.replace(",", "");
$scope.articleTxt = $scope.articleTxt.replace("<", "");
$scope.articleTxt = $scope.articleTxt.replace(".", "");
$scope.articleTxt = $scope.articleTxt.replace(">", "");
$scope.articleTxt = $scope.articleTxt.replace("/", "");
$scope.articleTxt = $scope.articleTxt.replace("?", "");
	$scope.sortResult = "";
	$scope.sortTxt = "";
	var sortHits = [];
	$scope.siftResult = "";
	$scope.siftTxt = "";
	var siftHits = [];
	var frequency = {};
	// SORT HANDLER //
	$scope.sortDisplay = function() {
		$scope.sortTxt = $scope.articleTxt;
		$scope.sortTxt = $scope.sortTxt.toLowerCase();
		$scope.sortTxt = $scope.sortTxt.split(' ');
		$scope.sortResult = sorter($scope.sortTxt);
	}
	var sorter = function(words) {
		var frequency = {}
		for(var j = 0; j < words.length; j++) {
			temp = words[j]
			frequency[temp] = frequency[temp] || 0
			frequency[temp] +=1;
		}
		for(var freq in frequency)
			sortHits.push([freq, frequency[freq]])
			sortHits.sort(function(a, b) {
				return b[1] - a[1]
			})
		var empty = "";
		for(var k = 0; k < sortHits.length; k ++) {
			empty = empty + sortHits[k][0] + ' was found ' + sortHits[k][1] + ' times '  
			console.log(empty)
		}
		return empty  
	}
	// SIFT HANDLER //
	$scope.siftDisplay = function() {
		$scope.siftTxt = $scope.articleTxt;
		$scope.siftTxt = $scope.siftTxt.toLowerCase();
		$scope.siftTxt = $scope.siftTxt.split(' ');
		$scope.siftResult = sift($scope.findWord);
	}
	var sift = function(word) {
		for(var i = 0; i < $scope.siftTxt.length; i++) {
			if($scope.siftTxt[i] === word) {
				siftHits.push(word);
			}
		}
		if(siftHits.length > 1) {
			return "Found:" + " " + '"' + word + '"' + " " + siftHits.length + " times."; 
		}
		else if(siftHits.length === 1) {
			return "Found:" + " " + '"' + word + '"' + " " + siftHits.length + " time.";
		}
		else {
			return "No matches!!!"
		}
	};
};

angular.module('siftSorter')
.controller('mainController', ['$scope', mainController]);