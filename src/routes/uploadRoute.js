const router = require('express').Router();
const controller = require('../controllers/uploadController');

router.route('/').post(controller.upload);

module.exports = router;
