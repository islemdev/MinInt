// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
let CitoyenController = require('./CitoyenController.js');
// Set default API response
router.get('/', function (req, res) {

    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

router.route('/citoyens/:cin')
    .get(CitoyenController.view);
router.route('/setup')
    .get(CitoyenController.setup);
// Export API routes
module.exports = router;