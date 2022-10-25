const router = require('express').Router();

const studentCtrll = require('../controllers/controllers');

router.get('/', studentCtrll.getAllStudents);

router.get('/:id', studentCtrll.getOneStudent);

router.post('/', studentCtrll.createStudent);

router.post('/edit/:id', studentCtrll.updateStudent);

router.post('/delete/:id', studentCtrll.deleteStudent);

module.exports = router;