import Gmail from '../pages/Gmail';
import Globals from '../support/Globals';
import { browser } from 'protractor';
import { Given, When, Then } from "cucumber";

// Chai
const globals = new Globals();
const expect = globals.expect;
const gmail = new Gmail();
var testData = require('../testData/testData.json');



When(/^User accesses the Gmail login page url "([^"]*)"$/, function (url) {
     return browser.get(url);
});

Then(/^User enters user email address$/,function(){
    return gmail.input_Email.sendKeys(testData.email);
});

Then(/^User enters clicks on next button$/,function(){
    return gmail.button_Next.click();
});

Then(/^User enters password$/,function(){
    return gmail.input_Password.sendKeys(testData.password);
});

Then(/^User selects encrypted mail from inbox$/,function(){
    browser.wait(browser.ExpectedConditions.presenceOf(gmail.row_Inbox), 120000, 'Element taking too long to appear in the DOM');
    return gmail.row_Inbox.click();
});

Then(/^User verifies mail header$/,function(){
    return expect(gmail.header_Mail.getText()).to.eventually.equal(testData.expected_MailHeader);
});

Then(/^User clicks on view message button$/,function(){
    return gmail.button_ViewMsg.click();
});

Then(/^User switches to virturu window and selects userlogin$/,function(){
    return browser.getAllWindowHandles().then(function(handles){
        browser.switchTo().window(handles[1]).then(function(){
           gmail.link_UserLogin.click();
        });
    });
});

Then(/^User selects login with google option$/,function(){
   return gmail.login_Google.click();
});

Then(/^User verifies the decrypted mail body$/,function(){
   return expect(gmail.text_decryptedMail.getText()).to.eventually.include(testData.expected_MailBody);
});