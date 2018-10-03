class Gmail{
    constructor(){
        this.input_Email = element(by.id('identifierId')); 
        this.button_Next = element(by.xpath('.//*[@class="RveJvd snByac"][text()="Next"]'));
        this.input_Password = element(by.xpath('.//*[@name="password"]'));
        this.button_PswdNext = element(by.xpath('(.//*[@class="RveJvd snByac"][text()="Next"])[1]'));
        this.row_Inbox = element(by.xpath('.//div/span[contains(text(),"Encrypted Mail Sample Test")]/../..'));
        this.header_Mail = element(by.xpath('.//h2[@class="hP"]'));
        this.button_ViewMsg = element(by.xpath('.//*[contains(@href,"secure.virtru")]'));
        this.link_UserLogin = element(by.xpath('(.//*[@class="userEmail"])[1]'));
        this.login_Google = element(by.className('oauth-provider-google'));
        this.text_decryptedMail = element(by.xpath('.//*[@id="tdf-body"]/div'));
     
    }
}

export default Gmail;
