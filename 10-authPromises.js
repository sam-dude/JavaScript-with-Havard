function login(req, res, callback) {
	User.findOne({email: req.body.email })
	.then(function(user) {
		return user.cpmparePassword(req.body.password
	})
	.then(function(isMatch) {
		if (!isMatch) res.status(401).send('Incorrect password')
		else {
			const payload = {id: user_id, email: user.email}
			return jwt.sign(payload, config.secret, {})
		}
	})
	.then(function(token) {
		user.token = token
		return user.save()
	})
	.then(function(){
		res.json({token})
	})
	.catch(function(err) {
		return callback(err)
	})
}
