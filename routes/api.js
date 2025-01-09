const router = require('express').Router();
const { employee } = require('../controllers');

router.get('/api/employee', employee.getData);
router.get('/api/employee/:id', employee.getDataById);
router.post('/api/employee/add', employee.addData);
router.post('/api/employee/edit/:id', employee.editData);
router.post('/api/employee/delete/:id', employee.deleteData);

module.exports = router;