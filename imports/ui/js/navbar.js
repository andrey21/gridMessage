import '../html/navbar.html';

Template.navbar.events({
    "click .logout": function(event){
        Meteor.logout(function(err){
            if(err){
                Bert.alert(err.reason, "danger", "growl-top-right");
            } else{
                Router.go("/");
                Bert.alert("You are now logged out", "success", "growl-top-right");
            }
        });
    }
});

Template.navbar.events({
    "click .user_icon"(){
        $('.ui.dropdown')
            .dropdown()
        ;
    }
});

