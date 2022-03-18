const authPg = require('../pageobjects/homePage');

describe('Authorisation to Revolab', () => {

    it('Should open auth page', async () => {
        await browser.url('https://www.revolab.lt/');
        await authPg.cookieBtn.click();
        await authPg.btnAuth.click();
        await expect(browser).toHaveUrl('https://revolab.lt/login')
    })


});

