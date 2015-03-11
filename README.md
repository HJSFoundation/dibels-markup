[ ![Codeship Status for innovationsforlearning/teacher_notepad_2](https://codeship.com/projects/063e3620-a8d0-0132-0d55-0aa73f753338/status?branch=master)](https://codeship.com/projects/67513)

[![Code Climate](https://codeclimate.com/repos/54fe11c6e30ba025e60019b9/badges/f3aec3044ba82c49c0e7/gpa.svg)](https://codeclimate.com/repos/54fe11c6e30ba025e60019b9/feed)

## Getting Started

- Clone this repo and `cd` into it
- Make sure you have node installed
  + `node --version`
    - If you see a version #, you have it
    - If not, [install it](https://nodejs.org/)
- Execute the node version of "bundling for Ruby". This will read the `package.json` file and gather your dependencies
  + `npm install`
- Install the Karma testing framework command line tools
  + `npm install -g karma-cli` (the -g stands for global)
  + Verify Karma is working
    - `karma start`
    - When you run this, you should see a browser window open and then on the command line you should see a bunch of passing specs. These will stay open and continue to run on file changes, so I suggest using a new tab for further development.

## Karma development features

+ If you look at the window that Karma opened, you will see a debug button on the upper right hand corner of the screen. If you click that, you will see a second tab open at the address of `/debug`.
  - The `karma-mocha-debug` module that we added gives us a nice html report (like the Ruby world's `teaspoon`) that would before only be visible in the console or command line without the plugin.
  - Feel free to pop `debugger` statments in your code. Refresh the debug page and poke around in the console.

## Running the server/watching the files for changes
  + Our system is using gulp to watch the source files and then wrap them up into minified, uglified, files for us. To make sure this is working properly, we need to be running gulp. This app is also setup with BrowserSync so that our changes will be reloaded in the browser on save. It uses a browserSync server so you do not need to manage your own server environment.
    - starting the server and watching the files is as easy as typing `gulp` on the command line. Then just leave this tab open and do any necessary command line work in a new tab.

## Fastclick
  +[Fastclick](https://github.com/ftlabs/fastclick) is a library that allows us to bypass the 300ms delay between a physical tap and the firing of a click event on mobile browsers. You will see that it has been added inside the index page and is being used inside the `deviceReady` listener. After that is should just work and if we need to turn it off for specific elements, we can do that manually. (see the documentation.)

## The Steroids CLI and the Appgyver Scanner
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
