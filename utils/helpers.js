const hbs = require('handlebars');

hbs.registerHelper('format_date', function(date) {
    date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();

        return month + '/' + day + '/' + year;
});