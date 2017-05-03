/**
 * 
 */

var myApp = angular.module("myModule",[]).controller("myContrl", function($scope){
	
	
	var employee = {
		name:"Raju",
		age:25,
		phone:8600499905
	};
	$scope.emp = employee;
	
	//Exercise	2 - Arrays with ng-repeat
	var employees = [
	    {firstname:"Rajamohan", lastname:"Raju", age:24},
	    {firstname:"Rajasekhar", lastname:"Raju", age:25},
	    {firstname:"Bhanu", lastname:"Raju", age:23},
	    {firstname:"Mahesh", lastname:"Raju", age:16}
	];
	
	$scope.employees=employees;
	
	//Exercise	3 - Arrays with nested ng-repeat
	var list = [
	     {name:"USA", cities:[{name:"London"}, {name:"XLon"}, {name:"France"}]},
	     {name:"India", cities:[{name:"Bengaluru"}, {name:"Chennai"}, {name:"Kadapa"}]},
	     {name:"Japan", cities:[{name:"Tokyo"}, {name:"Heroshima"}, {name:"Nagasaki"}]},
	];	
	
	$scope.countries = list;
	
	//Exercise 4 - Introductions to Events
	
	var technologies = [
	     { name:"Java", likes:0, dislikes:0 },
	     { name:".Net", likes:0, dislikes:0 },
	     { name:"NoSQL", likes:0, dislikes:0 },
	     { name:"Python", likes:0, dislikes:0 }
	];
	
	$scope.techs = technologies;
	
	$scope.likeTech = function(tech){
		tech.likes++;
	}
	
	$scope.dislikeTech = function(tech){
		tech.dislikes++;
	}
	
});
