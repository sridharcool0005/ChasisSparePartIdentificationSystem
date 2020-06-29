const express = require('express');
const router = express.Router();

const ctrlsparepart = require('../controllers/items.controller');


router.post('/create',ctrlsparepart.createSpareParts);
router.post('/getSpareParts',ctrlsparepart.getSpareParts);
router.post('/findLocation',ctrlsparepart.getLocation);
router.post('/createBranch',ctrlsparepart.createBranch);






module.exports = router;



