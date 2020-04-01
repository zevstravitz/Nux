const { Router } = require('express');
const config = require('../../config/index');
const axios = require('axios');

const { KEY } = config;
const router = Router()

const classPrefix = 'https://www.northwestern.edu/class-descriptions/';
const instructorPrefix = 'http://api.asg.northwestern.edu';


// Get Terms List
router.get('/terms', async (req, res) => {
  try {
    const terms =
      await axios.get('https://www.northwestern.edu/class-descriptions/index-v2.json')
    return res.send(terms.data);
  } catch {
    res.status(400).json({ msg: courses });
  }
});

// Get Course List
router.get('/courses/:term/:school/:subject', async (req, res) => {
  try {
    const courses =
      await axios.get(`${classPrefix}${term}/${school}/${subject}/index-v2.json`)
    return res.send(courses.data);
  } catch {
    res.status(400).json({ msg: "Courses fetch failed" });
  }
});

// Get Instructor List
router.get('/instructors/:subject', async (req, res) => {
  try {
    const instructors =
      await axios.get(`${instructorPrefix}/instructors/?key=${KEY}&subject=${req.params.subject}`)
    return res.send(instructors.data);
  } catch (e) {
    res.status(400).json({ msg: "Instructors Fetch Failed" });
  }
});

module.exports = router;