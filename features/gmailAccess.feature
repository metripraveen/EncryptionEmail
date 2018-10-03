@GmailTest
Feature: Encrypted gmail access to user

Scenario: Verify user is able to access encrypted gmail access
Given User accesses the Gmail login page url "http://www.gmail.com"
Then User enters user email address
And User enters clicks on next button
And User enters password
And User enters clicks on next button
And User selects encrypted mail from inbox
And User verifies mail header
And User clicks on view message button
And User switches to virturu window and selects userlogin
And User selects login with google option
And User verifies the decrypted mail body