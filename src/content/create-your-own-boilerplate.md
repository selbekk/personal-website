<!---
title: Create your own boilerplate
published: December 10th, 2015
-->
I've always had a hard time using boilerplate code - and especially generators.
More often than not, what seems like a simple one-command-does-it-all script
ends up with doing too much, or doing the setup in the way you don't prefer.

## More like bloater-plate
My first attempt at [Yeoman](http://yeoman.io/) went something like this:

1. Type in `yo webapp`.
2. Lots of files
3. Look through each one (especially that [500 line long Gruntfile](https://github.com/yeoman/generator-webapp/blob/master/app/templates/Gruntfile.js)),
trying to understand what's going on.
4. Either feel really stupid, give up or just push on, hoping that you don't have
to modify anything.

Now, I'm sure there are better boilerplate examples out there than this, but my
experience has taught me that nothing is better than doing it yourself.

## But boilerplate is boring
The reason there are boilerplate generators out there, is because writing the
same code over and over again is time consuming, boring and error prone. I've
lost count over how many times I've created the same folder structure, installed
the same dependencies and written the same general LESS files.

I guess we need boilerplates after all?

## So write your own!

Writing your own boilerplate is not hard. As a matter of fact, I'm sure you've
done it tons of times already. Remember all those websites you created? All
those apps you begun, but never finished? I bet most of those have your
preferred file structure already set up.

I do a lot of projects based on [node](nodejs.org), [express](expressjs.com),
[handlebars](handlebarsjs.com) and [less](lesscss.org). Therefore, I created my own little boilerplate template for those kinds of projects:

[Check out my boilerplate!](https://github.com/selbekk/express-app-boilerplate)

Getting started is a pretty simple process for me these days:

```bash
# clone the project to the folder you want
git clone git@github.com:selbekk/express-app-boilerplate.git my-project
cd my-project

# delete the .git/ folder to only keep relevant history, and start anew
rm -rf .git/ && git init

# Change details like package name, README etc, and commit it all
git commit -am "Initial commit from boilerplate"
```

That's it - now I'm ready to code my project. I don't have to delete stuff I
don't need. I don't have to add stuff I __do__ need. I can just start creating
new stuff.

Have you created your own boilerplate? Let me know in the comments.
