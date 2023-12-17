# NODEJS DEVELOPMENT

![Alt text](/Assets/nodejs-use-cases-cover-image.png)

## What is NODEJS

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

## Installation

Node.js can be installed in different ways. This post highlights the most common and convenient ones. Official packages for all the major platforms are available at https://nodejs.org/download/.

One very convenient way to install Node.js is through a package manager. In this case, every operating system has its own. Other package managers for MacOS, Linux, and Windows are listed in https://nodejs.org/download/package-manager/

nvm is a popular way to run Node.js. It allows you to easily switch the Node.js version, and install new versions to try and easily rollback if something breaks. It is also very useful to test your code with old Node.js versions.

See https://github.com/nvm-sh/nvm for more information about this option.

In any case, when Node.js is installed you'll have access to the node executable program in the command line.

### Topics, Core concepts and introduction to NODEJS

#### Terms and concepts to understand what is NODEJS

- ECMA script refers to standard language
- Javascript is what we use in practice and builds on top of ECMA Script
- ECMA-262 is language specification
- ECMA Script is language tha implements ECMA-262

  ### Javascript Engine

  Javascript engine is a program that converts javascript code into machine code that allows a computer to perform specific tasks

- V8, SpiderMonkey, JavascriptCore, Safari, Chakra #### Chrome V8 Engine
  V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. V8 can run standalone, or can be embedded into any C++ application.Its was created in 2008.
  ### Javascript Runtime
  JavaScript runtime is the environment where code is executed. In browsers, it's powered by engines like V8.
  - Node.js - offers a server-side runtime using V8.
  - Execution - context manages code scope and execution.
  - The event loop - handles asynchronous tasks.
  - Memory management - includes allocation and garbage collection.
    ![javascript runtime](<Assets/🚀⚙️ JavaScript Visualized_ the JavaScript Engine.gif>)
    Understanding the runtime is crucial for efficient code, especially in handling asynchronous operations and server-side development.

### Modules (User defined)

A module is an encapsulated and reusable chunk of code that has its own context in NodeJs, each file is treated as a separate module

- Local modules - Modules that we create in our application
- Built-in modules - Modules that Nodejs ships with out of the box
- Third party modules - Modules written by other developer that we can use in our application

CommonJS is a standard that states how a module should be structured and shared
Nodejs adopted CommonJS when is started out and is what is seen in code bases

### Built-in modules

### Node.js internals

### npm - Node Package Manager

Every Node application has a package.json file that includes metadata about the
application. This includes the name of the application, its version, dependencies,
etc.

- We use NPM to download and install 3rd-party packages from NPM registry:
- All the installed packages and their dependencies are stored under
  node_modules folders. This folder should be excluded from the source control.
- Node packages follow semantic versioning: major.minor.patch

#### Useful NPM commands are:

##### Install a package

    npm i <packageName>

##### Install a specific version of a package

    npm i <packageName>@<version>

##### Install a package as a development dependency

    npm i <packageName>

##### Uninstall a package

    npm un <packageName>

##### List installed packages

    npm list

##### Install legacy dependacies

    npm i --legacy-peer-deps

##### View outdated packages

    npm outdated

##### Update packages

    npm update

- To `install/uninstall` packages globally, use `-g` flag.

### CLI tools

### Misc

### EXPRESSJS

Express is a simple, minimalistic and lightweight framework for building web servers.

##### RESTful services (Representational State Transfer)

    C - POST to create a resource
    R - GET  to update it
    U - PUT to read it
    D - DELETE to delete it

##### Build a web server

    const express = require(‘express’);
    const app = express();

## Examples of requests (CRUDE)

##### Creating a course

    app.post(‘/api/courses’, (req, res) => {
         // Create the course and return the course object
         res.send(course);
    });

##### Getting all the courses

    app.get(‘/api/courses’, (req, res) => {

         // To read query string parameters (?sortBy=name)
         const sortBy = req.query.sortBy;

         // Return the courses
         res.send(courses);
    });

##### Getting a single course

    app.get(‘/api/courses/:id’, (req, res) => {
         const courseId = req.params.id;

          // Lookup the course
         // If not found, return 404
         res.status(404).send(‘Course not found.’);

         // Else, return the course object
         res.send(course);
    });

##### Updating a course

    app.put(‘/api/courses/:id’, (req, res) => {
         // If course not found, return 404, otherwise update it
         // and return the updated object.
    });

##### Deleting a course

    app.delete(‘/api/courses/:id’, (req, res) => {
         // If course not found, return 404, otherwise delete it
         // and return the deleted object.
    });

##### Listen on port 3000

    app.listen(3000, () => console.log(‘Listening…’));

- We use `Nodemon` to watch for changes in files and automatically restart the
  node process.
- We can use environment variables to store various settings for an application. To
  read an environment variable, we use `process.env`.

##### Reading the port from an environment variable

    const port = process.env.PORT || 3000;
    app.listen(port);

- You should never trust data sent by the client. Always validate! Use `Joi` package
  to perform input validation.

## Prerequisites

### Modern JavaScript

- Javascript Fundamentals crash course
- Advanced Javascript Crash course
- ES2015/2016 topics
