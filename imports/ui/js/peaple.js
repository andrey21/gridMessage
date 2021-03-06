Template.peaple.onCreated( () => {
    let template = Template.instance();
    template.subscribe( 'peaple' );
  });
  
  Template.peaple.helpers({
    currentChannel( name ) {
      let current = FlowRouter.getParam( 'channel' );
      if ( current ) {
        return current === name || current === `@${ name }` ? 'active' : false;
      }
    },
    channels() {
      let channels = Channels.find();
      if ( channels ) {
        return channels;
      }
    },
    users() {
      let users = Meteor.users.find( { _id: { $not: Meteor.userId() } } );
      if ( users ) {
        return users;
      }
    }
  });