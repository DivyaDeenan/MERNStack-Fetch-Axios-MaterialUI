const express = require('express');
//const { addProfile } = require('../client/controllers/profile');
const Profile = require('../client/models/Profile');
const router = express.Router();
/*
router
  .route('/')
   .post(addProfile);
*/
router.get('/', function (req, res, next) {
  res.render('index.html');
});

router.post('/profile', async function (req, res, next) {
console.log('called');
  try {
    const profile = await Profile.create(req.body);
    return res.status(201).json({
      success: true,
      data: profile
    });
  }

  catch (err) {
    console.error(err);

    res.status(500).json({ error: 'Server error' });
  }

});
module.exports = router;
