import '../ui/html/login.html';

// Tracker.autorun(function(){
//     if(Meteor.userId()){
//         Router.go("/");
//     }
// });

Template.login.rendered = function(){

};

Template.login.events({
    "submit .login-form": function(event){
        var username = trimInput(event.target.username.value);
        var password = trimInput(event.target.password.value);

        if(isNotEmpty(username) && isNotEmpty(password) && isValidPassword(password)){
            Meteor.loginWithPassword(username, password, function(err){
                if(err){
                    Bert.alert(err.reason, "danger", "growl-top-right");
                    return false;
                } else{
                    Router.go("/");
                    Bert.alert("You are logged in!", "success", "growl-top-right");
                }
            });
        }
        return false;
    }
});

var trimInput = function(val){
    return val.replace(/^\s*|\s*$/g, "");
};

var isNotEmpty = function(value){
    if(value && value != ''){
        return true;
    }
    Bert.alert('Please fill in all fields', 'danger', 'growl-top-right');
    return false;
}

var isValidPassword = function(value){
    if(value.length < 6){
        Bert.alert('Password must be at least 6 characters', 'danger', 'growl-top-right');
        return false;
    }
    return true;
};