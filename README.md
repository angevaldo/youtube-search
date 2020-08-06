# Youtube Search

[![Build Status](https://travis-ci.com/angevaldo/youtube-search.svg?branch=master)](https://travis-ci.com/angevaldo/youtube-search)

This web app uses YouTube Data API v3 with Angular 10 to do searches on Youtube and calculate the number of days to watch all the videos returned.

Features:
- Search and shows YouTube videos for a search term;
- Shows the five most used words in titles and descriptions of the result;
- Shows how many days are needed to watch all the videos returned (considering time spent on each day of the week and disregarding videos longer than the longest daily time);
- Responsive design.

Screen:

![print](https://github.com/angevaldo/youtube-search/blob/master/src/assets/images/print.png?raw=true)

## How to execute

- Install Node.js (https://nodejs.org/);
- Clone this project;
- Go to project folder and run `npm install` to install the dependencies;
- Run `ng serve` and navigate to `http://localhost:4200/`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
