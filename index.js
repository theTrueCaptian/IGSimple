var _ = require("lodash");

Instagram = require('instagram-node-lib');

Instagram.set('client_id', "1677913afa3641a098072add51ab72f6");
Instagram.set('client_secret', "8cd1ad18443a415aa0fad4b659466f66");

//Start with dian, and then get all the girls she tagged in her photos
//or get the followers who have a lot of followers
var search = Instagram.users.search({ q: 'dianpelangi', 
	complete:function(data, pagination){
		//console.log(data[0])
		var dianpelangi = _.find(data, function(obj){
			return _.isEqual(obj.username, "dianpelangi");
		});
		
		var dianUserID = dianpelangi.id;
		
		//Get all her followers
		Instagram.users.followed_by({ user_id: dianUserID,
			complete: function(data, pagination){
				//console.log(data[0])
				console.log("Dian Pelangi's followers:")
				
				//Display some information on all the followers of Dian
				_.forEach(data, function(follower){
					Instagram.users.info({ user_id: follower.id,
						complete: function(followerData){
							console.log(follower.username)
							console.log(follower.full_name)
							console.log(followerData.counts.followed_by)
							console.log("---------------------------")
						}
					});
					
				})
			}
		});
	} 
})



