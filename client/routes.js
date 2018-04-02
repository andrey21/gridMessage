Router.configure('/', {
    layoutTemplate: "main_layout"
});

Router.map(function(){
    //sidebar
    this.route('sidebar', {
        path: '/sidebar',
        template: 'sidebar'
    });
    //login
    this.route('login', {
        path: '/',
        template: 'login'
    });
    //signup
    this.route('signup', {
        path: '/signup',
        template: 'signup'
    });
    //profile
    this.route('privet_office', {
        path: '/privet_office',
        template: 'privet_office'
    });
    //writechat
    this.route('writechat', {
        path: '/writechat',
        template: 'writechat'
    });
    //recentchat
    this.route('recentchat', {
        path: '/recentchat',
        template: 'recentchat'
    });
});