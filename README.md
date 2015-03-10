[ ![Codeship Status for innovationsforlearning/teacher_notepad_2](https://codeship.com/projects/063e3620-a8d0-0132-0d55-0aa73f753338/status?branch=master)](https://codeship.com/projects/67513)

[![Code Climate](https://codeclimate.com/repos/54fe11c6e30ba025e60019b9/badges/f3aec3044ba82c49c0e7/gpa.svg)](https://codeclimate.com/repos/54fe11c6e30ba025e60019b9/feed)

Getting Started
---------------
- clone this repo
- cd into it
- make sure you have node installed
  + node --version
    - if you see a version #, you have it
    - if not, (install it)[https://nodejs.org/]
- Next, do the node version of "bundling for Ruby". This will read the package.json and gather your dependencies.
  + npm install
- Next install the Karma testing framework command line tools
  + npm install -g karma-cli (the -g stand for global)
  + verify Karma is working
    - karma start
    - when you run this, you should see a browser window open and then on the command line you should see a bunch of passing specs. These will stay open and continue to run on file changes, so I suggest using a new tab for further development.
- Karma development features
  + if you look at the window that Karma opened, you will see a debug button on the upper right hand corner of the screen. If you click that, you will see a second tab open at the address of /debug
    - The karma-mocha-debug module that we added gives us a nice html report (like the Ruby world's teaspoon) that would before only be visible in the console or command line without the plugin.
    - Feel free to pop debugger statments in your code. Refresh the debug page and poke around in the console.
