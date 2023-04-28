module.exports.signIn = function(req, res){

    var email = req.body.email;
    var username = req.body.username;

    res.render('home', {
        title: "Sign In",
        username: username
    });
};

module.exports.signUp = function(req, res){

    var email = req.body.email;
    var username = req.body.username;
    var usertype = req.body.usertype;

    // if(){

    //     var bal = 0;

    //     if(usertype == premium){
    //         bal = 2500;
    //     }
    //     else{
    //         bal = 1500;
    //     }

    //     res.render('signIn', {
    //         title: "Sign Up",
    //     });

    // }else{
    //     res.redirect(this.signIn);
    // }

    res.render('signIn');
   
};

