Meteor.publish("chatrooms", function(){
    return chatRooms.find({});
});
Meteor.publish("onlusers", function(){
    return Meteor.users.find({username:1});
});