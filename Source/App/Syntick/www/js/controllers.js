angular.module('syntickApp.controllers', [])

	.controller('ComplainsCtrl', function ($scope, syntickFac) {
		syntickFac.getComplainsRenter(1, function (complains) {
			console.log(complains);
			$scope.complains = complains;
		})
	})

	.controller('ComplainDetailCtrl', function ($scope, syntickFac) {
		syntickFac.getComplain(1, function (complain) {
			console.log(complain);
			$scope.complain = complain;
			$id = complain.complainId;
			complain.title = "Vaatwas werkt niet!!!";
			syntickFac.updateComplain($id, complain, function(complain) {
				console.log(complain);
			})
		});
	})

	.controller('AccountCtrl', function ($scope) {
		$scope.settings = {
			enableFriends: true
		};
	});
