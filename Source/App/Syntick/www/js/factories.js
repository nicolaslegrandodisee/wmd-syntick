angular.module('syntickApp.factories', [])
	
	.factory('syntickFac', function ($http, syntickVar){
		return {
			newRenter: function (renter, callback){
				$http({
					method: 'POST',
					url: syntickVar + 'renters',
					cache: false
				}).success(callback);
			},
			newComplain: function (complain, callback){
				$http({
					method: 'GET',
					url: 'http://davydewinne.ikdoeict.be/api/users/' + userId + '/wishes',
					headers: {
						'api-key': 'W-56dd3e0623264-f4f94'
					},
					cache: false
				}).success(callback);
			},
			getOwners: function (callback){
				$http({
					method: 'GET',
					url: 'http://davydewinne.ikdoeict.be/api/wishes',
					headers: {
						'api-key': 'W-56dd3e0623264-f4f94'
					},
					cache: false
				}).success(callback);
			}
		};
	});
