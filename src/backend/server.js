const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');
const compression = require('compression');
const marked = require('marked');
const processFiles = require('markdown-api-parser').processFiles;
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
app.get('/blog', (req, res) => {
    processFiles(__dirname + '/../content/*.md')
        .then(files => res.render('blog', {
            blogPosts: files.sort((a, b) => new Date(a.published) < new Date(b.published))
                .map(file => { return {
                    url: 'http://www.selbekk.io/blog/' + file.file.substring(file.file.lastIndexOf('/') + 1, file.file.length - 3),
                    title: file.title,
                    published: file.published,
                    content: marked(file.data)
                };
            })
        }))
        .catch(e => next());
});
app.get('/blog/:blogId', (req, res, next) =>
    processFiles(__dirname + '/../content/' + req.params.blogId + '.md')
        .then(files => res.render('blog-post', {
                slug: req.params.blogId,
                url: 'http://www.selbekk.io/' + req.params.blogId,
                title: files[0].title,
                published: files[0].published,
                content: marked(files[0].data)
            })
        )
        .catch(e => next())
);


// Error handling
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Start server
app.listen(app.get('port'),
    () => console.log('Server started at port ' + app.get('port') + '.')
);
