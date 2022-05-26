const express = require("express");

const router = express.Router();

const speakersRoute = require('./speakers');

const feedbackRoute = require('./feedback');

module.exports = params => {

  const {speakersService} = params;

  router.get("/", async(req, res) => {

    const topSpeakers = await speakersService.getList();

    res.render('layout', { pageTitle: "Welcome", template: 'index', topSpeakers });
  });
  
  router.use('/speakers', speakersRoute(params));

  router.use('/feedback', feedbackRoute(params));

  return router;

};
