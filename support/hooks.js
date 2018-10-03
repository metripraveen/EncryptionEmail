"use strict";

const { BeforeAll, After, Status,setDefaultTimeout  } = require("cucumber");
const conf = require("../config/config").config;

    BeforeAll({timeout: 120*1000}, function() {
      setDefaultTimeout(100 * 1000);

    });
  
    After({ timeout: 120 * 1000 },function(scenario) {
      if (scenario.result.status === Status.FAILED) {
        const attach = this.attach; // cucumber's world object has attach function which should be used
        return browser.takeScreenshot().then(function(png) {
          const decodedImage = new Buffer(png, "base64");
          return attach(decodedImage, "image/png");
        });
      }
    });


