const express = require('express');
const router = express.Router();
const daysCtrl = require('../../controllers/api/days');

router.use(require('../../config/auth'));

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;
