const express = require("express");
//const SpeakerService = require("../services/SpeakerService");

const router = express.Router();

module.exports = params => {
    const { speakersService } = params;
    
    router.get("/", async(req, res) => {

        const speakers = await speakersService.getList();
    
        res.render('layout', { pageTitle: "Speakers", template: 'speakers', speakers });
      });
    
    router.get('/:shortname', async(req, res) => {
        
        const speaker = await speakersService.getSpeaker(req.params.shortname);
        console.log(speaker);

        res.render('layout', { pageTitle: "Speakers", template: 'speakers-detail', speaker });
        
    
    });
    
    return router;

};