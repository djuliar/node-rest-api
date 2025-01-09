const conn = require('../configs/db');

module.exports = {
	getData(req,res){
		conn.getConnection(function(err, connection) {
			if (err) throw err;
			connection.query(
				'SELECT * FROM employee',
				function (error, results) {
					if(error) throw error;  
					res.send({ 
						success: true, 
						message: 'Success',
						data: results 
					});
				}
			);
			connection.release();
		})
	},
	getDataById(req,res){
		let id = req.params.id;
		conn.getConnection(function(err, connection) {
			if (err) throw err;
			connection.query(
				'SELECT * FROM employee WHERE employeeId = ?', [id],
				function (error, results) {
					if(error) throw error;  
					res.send({ 
						success: true, 
						message: 'Success',
						data: results 
					});
				}
			);
			connection.release();
		})
	},
	addData(req,res){
		let data = {
			lastname : req.body.lastname,
			firstname : req.body.firstname,
			city : req.body.city,
			region : req.body.region
		}
		conn.getConnection(function(err, connection) {
			if (err) throw err;
			connection.query(
				'INSERT INTO employee SET ?', [data],
			function (error, results) {
				if(error) throw error;  
				res.send({ 
					success: true, 
					message: 'Success',
				});
			});
			connection.release();
		})
	},
	editData(req,res){
		let id = req.params.id;
		let data = {
			lastname : req.body.lastname,
			firstname : req.body.firstname,
			city : req.body.city,
			region : req.body.region
		}
		conn.getConnection(function(err, connection) {
			if (err) throw err;
			connection.query(
				'UPDATE employee SET ? WHERE employeeId = ?', [data, id],
			function (error, results) {
				if(error) throw error;  
				res.send({ 
					success: true, 
					message: 'Success',
				});
			});
			connection.release();
		})
	},
	deleteData(req,res){
		let id = req.params.id;
		conn.getConnection(function(err, connection) {
			if (err) throw err;
			connection.query(
				'DELETE FROM employee WHERE employeeId = ?', [id],
				function (error, results) {
					if(error) throw error;  
					res.send({ 
						success: true, 
						message: 'Success',
						data: results 
					});
				}
			);
			connection.release();
		})
	},
}