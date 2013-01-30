var app = {

    initialize: function() {
        var self = this;
        // compile templates
        this.homeTpl = Handlebars.compile($("#home-tpl").html());
        this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
        //init storage
        this.store = new LocalStorageStore(function() {
            self.renderHomeView();
            self.showAlert("Store initialized", "Info");
        });
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },

    findByName: function() {
        console.log('findByName');
        var self = this;
        this.store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html(self.employeeLiTpl(employees));
        });
    },

    showAlert: function (message, title) {
        if (navigator.notification) {
          navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    renderHomeView: function() {
        $('body').html(this.homeTpl());
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }
};

app.initialize();