angular.module('syntickApp.factories', [])
	
	.factory('syntickFac', function ($http, syntickVar) {
		return {
			
			// Renter
			newRenter:          function (renter, callback) {
				$http({
					method: 'POST',
					url:    syntickVar + '/renters',
					data:   {},
					cache:  false
				}).success(callback);
			},
			getRenter:          function (id, callback) {
				$http({
					method: 'GET',
					url:    syntickVar + '/renters/' + id,
					cache:  false
				}).success(callback);
			},
			getComplainsRenter: function (id, callback) {
				$http({
					method: 'GET',
					url:    syntickVar + '/renters/' + id + '/complains',
					cache:  false
				}).success(callback);
			},
			updateRenter:       function (id, renter, callback) {
				$http({
					method: 'PUT',
					url:    syntickVar + '/renters/' + id,
					cache:  false
				}).success(callback);
			},
			
			// Owners
			getOwners:         function (callback) {
				$http({
					method: 'GET',
					url:    syntickVar + '/owners',
					cache:  false
				}).success(callback);
			},
			newOwner:          function (owner, callback) {
				$http({
					method: 'POST',
					url:    syntickVar + '/owners/',
					cache:  false
				}).success(callback);
			},
			getOwner:          function (id, callback) {
				$http({
					method: 'GET',
					url:    syntickVar + '/owners/' + id,
					cache:  false
				}).success(callback);
			},
			getComplainsOwner: function (id, callback) {
				$http({
					method: 'GET',
					url:    syntickVar + '/owners/' + id + '/complains',
					cache:  false
				}).success(callback);
			},
			updateOwner:       function (id, owner, callback) {
				$http({
					method: 'PUT',
					url:    syntickVar + '/owners/' + id,
					cache:  false
				}).success(callback);
			},
			
			// Complains
			getComplains:   function (callback) {
				$http({
					method: 'GET',
					url:    syntickVar + '/complains/',
					cache:  false
				}).success(callback);
			},
			newComplain:    function (complain, callback) {
				$http({
					method: 'POST',
					url:    syntickVar + '/complains/',
					cache:  false
				}).success(callback);
			},
			getComplain:    function (id, callback) {
				$http({
					method: 'GET',
					url:    syntickVar + '/complains/' + id + '/complains',
					cache:  false
				}).success(callback);
			},
			updateComplain: function (id, complain, callback) {
				$http({
					method: 'PUT',
					url:    syntickVar + '/complains/' + id,
					cache:  false
				}).success(callback);
			},
		};
	});
