
import '../html/body.html';
import './navbar.js';
import './sidebar.js';
import '../../api/login.js';
import '../../api/signup.js';
import './privet_office.js';
import './writechat.js';
import './recentchat.js';
import '../../collection/collection.js';
import '../../api/server.js';
import '../../api/publication.js';

Account.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Deps.autorun(function(){
    Meteor.subscribe("chatrooms");
    Meteor.subscribe("onlusers");
});

Template.sidebar.helpers({
    "onlusers": function(){
        return Meteor.users.find(_id = {$ne:Meteor.userId()})
    }
});
