var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){

	$scope.characters = 
{
	"name":"Dandy Warhol",
	"shortname":"dandy",
	"reknown":"Bard",
	"bio":"the captain of the Pauly Offshore"
	},
	{
	"name":"Ouija Bjord",
	"shortname":"Ouija",
	"reknown":"Death Cleric",
	"bio":"a really weird girl who sells arts and crafts"
	},
	{
	"name":"Karma Le Khayturn",
	"shortname":"Karma",
	"reknown":"Monk",
	"bio":"a very moody person"
	},
	{
	"name":"Chuffy Lickwound",
	"shortname":"Chuffy",
	"reknown":"Goblin",
	"bio":"a sadistic, horrible little thing"
	};

});