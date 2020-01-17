    //User name and password checking basics

    let userEmail = 'emikeovo@gmail.com'
    let password = "home12"

    // mail mmust contains "@gmail.com"
    let userChecker = function(myMail){
        if((myMail.includes('@gmail.com')) && (myMail.length > 6)){
            return true
        }
        return false
    }

    // password must contain "123"
    let pwdChecker = function(pass){
        if((pass.includes('123')) && (pass.length > 8)){
            return true
        }
        return false
    }

    console.log(userChecker(userEmail))
    console.log(pwdChecker(password))


