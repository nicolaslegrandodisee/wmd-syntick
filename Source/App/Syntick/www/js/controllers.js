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
<<<<<<< HEAD
			/*syntickFac.updateComplain($id, complain, function(complain) {
				console.log(complain);
			})*/
=======
			syntickFac.updateComplain($id, complain, function(complain) {
				console.log(complain);
			})
>>>>>>> 470269cebddca5dffca1561ec8a432ad5fa2fee8
		});
	})

	.controller('AccountCtrl', function ($scope) {
		$scope.settings = {
			enableFriends: true
		};
	});
