import '../html/privet_office.html';


Template.privet_office.helpers({
    username: function() {
        if(!Meteor.user()){
            Bert.alert("You re not logged in, permission denied", "danger", "growl-top-right");
            return false;
        } else {
            return Meteor.user().username;
        }
    }
});