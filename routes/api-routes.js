var db = require('../models');

module.exports = app => {
	app.get('/api/userData', (req, res) => {
		db['userData'].findAll({}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.post('/api/userData', (req, res) => {
		db['userData'].findOne({
			where: {
				username: req['body']['username']
			}
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.post('/api/userData/create', (req, res) => {
		console.log(req['body']);
		db['userData'].create({
            email: req['body']['email'],
            username: req['body']['username'],
			password: req['body']['password'],
			firstName: req['body']['firstName'],
			lastName: req['body']['lastName']
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.get('/api/lobby', (req, res) => {
		db['user'].findAll({}).then(dbuser => {
			res.json(dbuser);
		});
	});

	app.get('/api/lobby/:username', (req, res) => {
		db['user'].findAll({
			where: {
				onlineUser: req['params']['username']
			}
		}).then(dbuser => {
			res.json(dbuser);
		});
	});

	app.post("/api/lobby", function (req, res) {
		console.log(req.body);
		db.user.create({
			onlineUser: req.body.onlineUser,
			score: req.body.score
		}).then(function (dbuser) {
			res.json(dbuser);
		});
	});

	app.put('/api/lobby', (req, res) => {
		db['user'].update(req['body'], {
			where: {
				onlineUser: req['body']['onlineUser']
			}
		}).then(dbuser => {
			res.json(dbuser);
		});
	});

	app.delete('/api/lobby', (req, res) => {
		db['user'].destroy({
			where: {
				id: req['body']['id']
			}
		}).then(dbuser => {
			res.json(dbuser);
		});
	});

	app.post('/api/login', (req, res) => {
		db['userData'].findOne({
			where: {
				username: req['body']['username'],
				password: req['body']['password']
			}
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.post('/api/forget', (req, res) => {
		db['userData'].findOne({
			where: {
				username: req['body']['username']
			}
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.put('/api/forget', (req, res) => {
		db['userData'].update(req['body'], {
			where: {
				id: req['body']['id']
			}
		}).then(dbUserData => {
			res.json(dbUserData);
		});
	});

	app.get('/api/word', (req, res) => {
		db['word'].findAll({}).then(dbWord => {
			res.json(dbWord);
		});
	});

	app.delete('/api/word', (req, res) => {
		db['word'].destroy({
			where: {
				id: req['body']['id']
			}
		}).then(dbWord => {
			res.json(dbWord);
		});
	});
};