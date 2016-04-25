angular.module('syntickApp.factories', [])

	.factory('syntickFac', function ($http, syntickVar) {
		return {
			
			// Renter
			newRenter:          function (renter, callback) {
				$http({
					method: 'POST',
					url:    syntickVar.api.api + '/renters',
					data:   {
						address: renter.address,
						name:    renter.name,
						email:   renter.email,
						ownerId: renter.ownerId,
					},
					cache:  false
				}).success(callback);
			},
			getRenter:          function (id, callback) {
				$http({
					method: 'GET',
					url:    syntickVar.api + '/renters/' + id,
					cache:  false
				}).success(callback);
			},
			getComplainsRenter: function (id, callback) {
				$http({
					method: 'GET',
					url:    syntickVar.api + '/renters/' + id + '/complains',
					cache:  false,
					header: {
						'Content-Type': 'application/json'
					}
				}).success(callback);
			},
			updateRenter:       function (id, renter, callback) {
				$http({
					method: 'POST',
					url:    syntickVar.api + '/renters/' + id,
					data:   {
						address: renter.address,
						name:    renter.name,
						email:   renter.email,
						ownerId: renter.ownerId,
						_method: 'put',
					},
					cache:  false
				}).success(callback);
			},
			
			// Owners
			getOwners:         function (callback) {
				$http({
					method: 'GET',
					url:    syntickVar.api + '/owners',
					cache:  false
				}).success(callback);
			},
			newOwner:          function (owner, callback) {
				$http({
					method: 'POST',
					url:    syntickVar.api + '/owners/',
					data:   {
						email:     owner.email,
						name:      owner.name,
						telephone: owner.telephone,
					},
					cache:  false
				}).success(callback);
			},
			getOwner:          function (id, callback) {
				$http({
					method: 'GET',
					url:    syntickVar.api + '/owners/' + id,
					cache:  false
				}).success(callback);
			},
			getComplainsOwner: function (id, callback) {
				$http({
					method: 'GET',
					url:    syntickVar.api + '/owners/' + id + '/complains',
					cache:  false
				}).success(callback);
			},
			updateOwner:       function (id, owner, callback) {
				$http({
					method: 'PUT',
					url:    syntickVar.api + '/owners/' + id,
					data:   {
						email:     owner.email,
						name:      owner.name,
						telephone: owner.telephone,
						_method: 'put',
					},
					cache:  false
				}).success(callback);
			},
			
			// Complains
			getComplains:   function (callback) {
				$http({
					method: 'GET',
					url:    syntickVar.api + '/complains/',
					cache:  false
				}).success(callback);
			},
			newComplain:    function (complain, callback) {
				$http({
					method: 'POST',
					url:    syntickVar.api + '/complains/',
					data:   {
						ownerId: complain.ownerId,
						renterId: complain.renterId,
						title: complain.title,
						message: complain.message,
						priority: complain.priority,
					},
					cache:  false
				}).success(callback);
			},
			getComplain:    function (id, callback) {
				$http({
					method: 'GET',
					url:    syntickVar.api + '/complains/' + id,
					cache:  false
				}).success(callback);
			},
			updateComplain: function (id, complain, callback) {
				$http({
					method: 'POST',
					url:    syntickVar.api + '/complains/' + id,
					data:   {
						ownerId: complain.ownerId,
						renterId: complain.renterId,
						title: complain.title,
						message: complain.message,
						priority: complain.priority,
						_method: 'put',
					},
					cache:  false
				}).success(callback);
			},

		};
	});
