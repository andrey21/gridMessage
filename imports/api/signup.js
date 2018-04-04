import { Accounts } from 'meteor/accounts-base';
import '../ui/html/signup.html';

Template.signup.rendered = function() {

};

Template.signup.events({
    "submit .form-signup": function(event){
        var username = trimInput(event.target.username.value);
        var password = trimInput(event.target.password.value);

        if(isNotEmpty(username) && isNotEmpty(password) && isValidPassword(password)){
            
            Accounts.createUser({
                username: username,
                password: password,
                profile: {

                }
            },  function(err){
                    if(err){
                        Bert.alert(err.reason, "danger", "growl-top-right");
                    } else {
                        Bert.alert("Accaunt Created!", "success", "growl-top-right");
                        Router.go("/");
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