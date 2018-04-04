Router.map(function(){
    // sidebar
    this.route('/', function () {
        this.layout('sidebar');
    });
    // login
    this.route('/login', function () {
        this.layout('login');
    });
    // signup
    this.route('/signup', function () {
        this.layout('signup');
    });
    // profile
    this.route('/privet_office', function () {
        this.layout('sidebar');
        this.render('privet_office', {to: 'privat'});
    });
    //writemess
    this.route('/writemess', function () {
        this.layout('writemess');
    });
    // message write
    this.route('/messages/general', function () {
        this.layout('sidebar');
        this.render('channel', {to: 'prob'});
    });

});