[ ![Codeship Status for innovationsforlearning/teacher_notepad_2](https://codeship.com/projects/063e3620-a8d0-0132-0d55-0aa73f753338/status?branch=master)](https://codeship.com/projects/67513)

[![Code Climate](https://codeclimate.com/repos/54fe11c6e30ba025e60019b9/badges/f3aec3044ba82c49c0e7/gpa.svg)](https://codeclimate.com/repos/54fe11c6e30ba025e60019b9/feed)

## AirPair Notes

* Consider unique token hex
* Callback to generate token if necessary
* Consider an application token as well
* Add email for Token Authentication

### Refresh

http://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Token.html

### Testing

```
curl -d '{ "email":"randy-tutor@test.org", "password":"12345678" }' http://localhost:3000/api/v1/sign_in --header "Content-Type:application/json"

curl http://localhost:3000/api/v1/users/1 --header "Content-Type:application/json" -H 'Authorization: Token token="828108a0be55df2c8abb368cad17bb3b"'

curl http://localhost:3000/api/v1/users/1 --header "Content-Type:application/json" -H 'Authorization: Token token="828108a0be55df2c8abb368cad17bb3b", email="randy-tutor@test.org"'
```

## Getting Started

- Clone this repo and `cd` into it
- Make sure you have node installed
  + `node --version`
    - If you see a version #, you have it
    - If not, [install it](https://nodejs.org/)
- Execute the node version of "bundling for Ruby". This will read the `package.json` file and gather your dependencies
  + `npm install`
- Install the [Karma](http://karma-runner.github.io/0.12/index.html) testing framework command line tools
  + `npm install -g karma-cli` (the -g stands for global)
  + Verify Karma is working
    - `karma start`
    - When you run this, you should see a browser window open and then on the command line you should see a bunch of passing specs. These will stay open and continue to run on file changes, so I suggest using a new tab for further development.

## Karma development features

+ If you look at the window that Karma opened, you will see a debug button on the upper right hand corner of the screen. If you click that, you will see a second tab open at the address of `/debug`.
  - The `karma-mocha-debug` module that we added gives us a nice html report (like the Ruby world's `teaspoon`) that would before only be visible in the console or command line without the plugin.
  - Feel free to pop `debugger` statments in your code. Refresh the debug page and poke around in the console.

## Running the server/watching the files for changes
  +  Our system is using gulp and [BrowserSync](http://www.browsersync.io/) so that our changes will be reloaded in the browser on save. To make sure this is working properly, we need to be running gulp.  BrowserSync runs a server so you do not need to manage your own server environment.
    - starting the server and watching the files is as easy as typing `gulp` on the command line. Then just leave this tab open and do any necessary command line work in a new tab.

## Fastclick
  +[Fastclick](https://github.com/ftlabs/fastclick) is a library that allows us to bypass the 300ms delay between a physical tap and the firing of a click event on mobile browsers. You will see that it has been added inside the index page and is being used inside the `deviceReady` listener. After that is should just work and if we need to turn it off for specific elements, we can do that manually. (see the documentation.)

## The [Steroids CLI](http://docs.appgyver.com/tooling/cli/steroids-cli/) and the [Appgyver Scanner](https://itunes.apple.com/us/app/appgyver-scanner/id575076515?mt=8)
  + Appgyver has created a handy tool that will allow us to live reload changes from our app to our device in real time! Awesome! Here's how to do it...
    - Go to the appstore on your device and install the `Appgyver Scanner`. Once installed, open the app.
    - in a new console tab, `cd` into teacher notepad
    - globally install the steroids cli
      + `npm install steroids -g`
    - Run steroids with the live reload option
      + steroids connect --livereload
      + (next time you want to use this you will just need to run this command)
    - A new window will open up in your window with a QR code.Scan the QR code. The reader is buggy sometimes and can take 3-4 scans to work. I find it works better if you move in a little closer.
    - Now make sure you are also running the gulp command in a separate console tab and when you make changes and the gulp task `recompiles` our files, the changes should also update on your device.
    - LOVE! (Let's hope this stands the test of us moving forward)

## [cordova-minify](https://www.npmjs.com/package/cordova-minify)
  + A Cordova hook that uglifies and minifies your app's Javascript files, minifies CSS files, and compresses your image files. It hooks into the Cordova `build` and `prepare` commands so the uglification and minification will take place in your platforms directory but will not touch files in your `www` directory. To get set up with it, there is one step you will need to take.
  - change the permissions on your hooks directory.
    + from the root of the project:
      - chmod -R 755 hooks
  - now it will run whenever you `build` or `prepare`

## Templating
  + for our templating system we are using [handlebars](http://handlebarsjs.com/) and [gulp-handlebars](https://github.com/lazd/gulp-handlebars)
  + handlebars will be used for our templates but gulp-handlebars will be used to precompile our templates so there will be some differences between how the templates are used/called due to that precompile that may seem different than the basic handlbars documentation. I suggest reading about handlebars and then also reading about gulp handlbars to get a better picture.
  + To get familiar with the basic handlebars needs, check out the handlebars documentation or this [post](http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/) which I think has a more in depth walkthrough.
 + To create a template to be used, place in in the appropriate templates directory, either the template directory or partials directory and give the file the extension of .hbs. If the file is a partial, it must be prefixed with an _. example: _filename.hbs.  In the template file you will place your raw html and add in the {{data-placeholders}} as necessary.
 + The gulp handlebars will compile up all of our templates and place them in the App namespace. Now when we want to reference them, we will call App.templates.templatename
 + In your javascript, generally, each object will have it's own template attached to it's protype. For example, let's look at login:
  - When defining login, we would append the template to the prototype. We do this outside of the object as to create a template at the class level so that we are not having to create a new one for each instance of the object since the template itself does not actually change.
    + `App.Login.prototype.template = App.templates.login`
  - When you want to use/call the template, you will want to render it to the universal application div the controls the Single Page App and you would do so like this...
    + `this.$appliactionContainer.html(this.template(students));`
      - In this case `$applicationContainer` is a reference to `this.$appliactionContainer = $("#applicationContainer");`
