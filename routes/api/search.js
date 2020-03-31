const { Router } = require('express');
const config = require('../../config/index');
const axios = require('axios');

const { KEY } = config;
const router = Router()

const urlPrefix = 'http://api.asg.northwestern.edu';

router.get('/courses/:subject', async (req, res) => {
  try {
    const courses =
      await axios.get(`${urlPrefix}/courses/?key=${KEY}&term=4530&subject=${req.params.subject}`)
    return res.send(courses);
  } catch {
    res.status(400).json({ msg: courses });
  }
});

router.get('/instructors/:subject', async (req, res) => {
  try {
    console.log('test')
    const instructors =
      await axios.get(`${urlPrefix}/instructors/?key=${KEY}&subject=${req.params.subject}`)
    return res.send(instructors);
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});

module.exports = router;