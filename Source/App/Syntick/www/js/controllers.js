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
			$scope.formComplain = complain;
			$id = complain.complainId;
		});

		$scope.formSubmit = function(formComplain) {
			syntickFac.updateComplain($id, formComplain, function(complain) {
				console.log(complain);
			});
		}
	})

	.controller('AccountCtrl', function ($scope) {
		
	});
