class authPage {

    get log () {
        return $('input[autocomplete="email"]');
    }

    get pass () {
        return $('input[autocomplete="current-password"]')
    }

    get subBtn () {
        return $('.Login_loginPageButton__27KPG')
    }
    
}
module.exports = new authPage();