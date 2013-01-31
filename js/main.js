var app = {

    initialize: function() {
        var self = this;
        //init storage
        this.store = new LocalStorageStore(function() {
            $('body').html(new HomeView(self.store).render().el);
            self.showAlert("Store initialized", "Info");
        });
    },

    showAlert: function (message, title) {
        if (navigator.notification) {
          navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    }
};

app.initialize();