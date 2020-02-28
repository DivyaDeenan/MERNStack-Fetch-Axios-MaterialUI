const Profile = require('../models/Profile');


exports.addProfile = async (req, res, next) => {
  console.log("called");
  try {
    console.log("from db");
    const profile = await Profile.save(req.body);
   
   console.log(res.status);
    return res.status(201).json({
      success: true,
      data: profile
    });
  } catch (err) {
    console.error(err);
    
    res.status(500).json({ error: 'Server error' });
  }
  next();
};
