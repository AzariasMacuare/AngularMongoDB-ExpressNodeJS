const { Router } = require('express');
const router = Router();

const emCtrl = require('../controllers/employee.controllers');

router.get('/', emCtrl.getEmployees);
router.post('/', emCtrl.createEmployees);
router.get('/:id', emCtrl.getEmployee);
router.put('/:id', emCtrl.editEmployee);
router.delete('/:id', emCtrl.deleteEmployee);


module.exports = router;