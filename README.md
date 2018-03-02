# Mockup Builder

Uses Express.js and Pug to build a tree of HTML files, to serve as mockups. Used by our dev team for CSCE 4444 (Spring 2018).

## Prerequisites

- [Node.js](//nodejs.org) and NPM
- [Nodemon](https://github.com/remy/nodemon) (`npm i -g nodemon`)

## How to Use

1. Clone this repository
2. From the root directory of this repository, run `npm i`
3. Add/delete/modify the Pug files in `./views/pages/`

## Build Process

1. Runs `./clean.js` to clean all HTML files out of the output directory
2. Copies new/modified files from `./static/` to `./output/static/`
3. Runs `./build.js` to render all Pug files in `./views/pages/` and outputs them (preserving structure) to `./output/`
4. Runs `./server.js` to serve static files from `./output/`, to simulate an Apache2 webserver
