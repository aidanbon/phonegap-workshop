/* Employee View */

var EmployeeView = function(employee) {
 
    this.initialize = function() {
        this.showAlert("1,2", "in EmployeeView initialize");
        this.el = $('<div/>');
    };
 
    this.render = function() {
        this.el.html(EmployeeView.template(employee));
        this.showAlert("1.3", "render employee html "+this.el.html);
        return this;
    };

    this.showAlert = function (title, message) {
        if (navigator.notification) {
          navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    };

    this.showAlert("1.1", "calling initialize");
    this.initialize();
 };
 
EmployeeView.template = Handlebars.compile($("#employee-tpl").html());