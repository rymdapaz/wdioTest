const authBt = require('../pageobjects/homePage.js');
const pageAuth = require('../pageobjects/authPage.js')

describe('Authorisation to Revolab', () => {

    it('Should open auth page', async () => {
        await browser.url('https://www.revolab.lt/');
        await authBt.cookieBtn.click();
        await authBt.btnAuth.click();
        await expect(browser).toHaveUrl('https://revolab.lt/login')
    })

    it('Should login', async () => {
        await pageAuth.log.setValue('derbyshiredelia@yahoo.com');
        await pageAuth.pass.setValue('password');
        await pageAuth.subBtn.click();
        await expect(browser).toHaveUrl('https://revolab.lt/dashboard')

    })


});

