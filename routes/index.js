const router = require('express').Router();
const loginRoutes = require('./login');

router.use('/api/books', loginRoutes);

module.exports = router;
