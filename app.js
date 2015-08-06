// Garmin Connect Web Scraping with x-ray & phantomjs driver

/**
 * Module dependencies.
 */

var Xray = require('x-ray'); // x-ray web scraper - https://github.com/lapwinglabs/x-ray
var phantom = require('x-ray-phantom'); // phantom driver for x-ray - https://github.com/lapwinglabs/x-ray-phantom


var profile = 'galbraithg'; // Garmin Connect Profile


var url = 'https://connect.garmin.com/profile/' + profile;
var x = Xray().driver(phantom());

x(url,'.object-content .activity-detail .object-content', [{
    Journey: 'h4',
    Distance: '.activity-stats span + span',
    Time: '.activity-stats span + span + span'
  }])
  (function(err,data){
    if(err) {
      console.log('Error: ' + err);
    } else {
      console.log(data);
    }
  });