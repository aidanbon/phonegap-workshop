/* Employee View */

var EmployeeView = function(employee) {
 
    this.initialize = function() {
        alert("in EmployeeView initialize");
        this.el = $('<div/>');
    };
 
    this.render = function() {
        this.el.html(EmployeeView.template(employee));
        alert("render employee html "+this.el.html);
        return this;
    };

    this.initialize();
 };
 
EmployeeView.template = Handlebars.compile($("#employee-tpl").html());