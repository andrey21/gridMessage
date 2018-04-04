import '../html/sidebar.html';
import { Template } from 'meteor/templating';

Tracker.autorun(function() {
    if(! Meteor.userId()) {
        Router.go("/login");
    }
});