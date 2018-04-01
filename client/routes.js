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
});