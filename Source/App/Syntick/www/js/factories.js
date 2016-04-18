angular.module('syntickApp.variables', [])
	
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
			},
			postWish: function (wish, callback){
				$http({
					method: 'POST',
					url: 'http://davydewinne.ikdoeict.be/api/wishes',
					data: {
						gotit: 0,
						product: wish.name,
						price: wish.price,
					},
					headers: {
						'api-key': 'W-56dd3e0623264-f4f94'
					},
					cache: false
				}).success(callback);
			},
			putWish: function (id, gotit, callback){
				$http({
					method: 'PUT',
					url: 'http://davydewinne.ikdoeict.be/api/wishes/' + id,
					data: {
						gotit: gotit
					},
					headers: {
						'api-key': 'W-56dd3e0623264-f4f94'
					},
					cache: false
				}).success(callback);
			},
			deleteWish: function (wishId, callback){
				$http({
					method: 'DELETE',
					url: 'http://davydewinne.ikdoeict.be/api/wishes/' + wishId,
					headers: {
						'api-key': 'W-56dd3e0623264-f4f94'
					},
					cache: false
				}).success(callback);
			},
		};
	});
