const express = require('express');
const exphbs = require('express-handlebars');
const compression = require('compression');
const app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.set('port', process.env.PORT || 4000);

// Middleware
app.use(compression());
app.use('/assets', express.static('dist'));

// Routes
app.get('/', (req, res) => res.render('index') );

// Error handling

// Start server
app.listen(app.get('port'),
    () => console.log('Server started at port ' + app.get('port') + '.')
);
