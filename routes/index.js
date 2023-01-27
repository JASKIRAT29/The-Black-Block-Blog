const router = require('express').Router();
const blogRoutes = require('./blogRoutes');

/* GET users listing. */
router.get("/", (req, res, next) => {
 res.send("respond with a resource");
  });

router.use('/blogs', blogRoutes);


module.exports = router;
