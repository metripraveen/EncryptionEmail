const path = require("path");
const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("../support/reporter");

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  baseUrl: "",
  allScriptsTimeout: 240000,
  getPageTimeout: 60000,
  capabilities: {
    browserName: process.env.TEST_BROWSER_NAME || "chrome"
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/*.feature"],
  exclude: "../features/database.feature",
  // resultJsonOutputFile: "./reports/json/protractor_report.json",
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(60000);

    require('babel-register');
    module.exports = function() {
      this.setDefaultTimeout(60 * 1000);
  }; 

    Reporter.createDirectory(jsonReports);
  },
  cucumberOpts: {
    strict: true,
    format: 'json:./reports/json/cucumber_report.json',
    require: ["../stepDefinitions/*.js", "../support/*.js"],
    tags: "(@GmailTest)" // @DatabaseTest scenario can be included when the username & password of DB have been configured in Support/database.js
  },
  onComplete: function () {
    Reporter.createHTMLReport();
  }
};
