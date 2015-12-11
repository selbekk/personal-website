const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');
const compression = require('compression');
const marked = require('marked');
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
app.get('/blog/:blogId', (req, res, next) => {
    const CONTENT_DIR = __dirname + '/../content';
    const slug = req.params.blogId + '.md';
    fs.readFile(CONTENT_DIR + '/' + slug, 'UTF-8', (err, content) => {
        if(err) {
            return next();
        }
        res.render('blog-post', { body: marked(content) });
    });
});


// Error handling
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Start server
app.listen(app.get('port'),
    () => console.log('Server started at port ' + app.get('port') + '.')
);
