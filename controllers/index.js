const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');
const apiRoutes = require('./api');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

/* GET users listing. */
// router.get("/", (req, res, next) => {
//   res.send("respond with a resource");
// });
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// router.use('/blogs', blogRoutes);

module.exports = router;
