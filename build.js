/** sort out paths */

const path = require('path');

const VIEWS_ROOT  = path.join(__dirname, '/views');
const VIEWS_PAGES = path.join(VIEWS_ROOT, '/pages');

const OUTPUT_DIR  = path.join(__dirname, '/temp_output');

console.log('building pages from %s', VIEWS_PAGES);

/** set up renderer */

const express = require('express');
const pug     = require('pug');
const pretty  = require('pretty');

/** walk VIEWS_PAGES tree and render each page */

const walk   = require('walk');
const mkdirp = require('mkdirp');
const fs     = require('fs');
const ext    = require('replace-ext');

const walkOptions = {
    listeners: {

        file: (root, stats, next) => {
            if (stats.name.match(/^.+\.pug$/))
            {
                // get filepath
                
                let filepath = path.join(root, stats.name);
                let relpath  = path.relative(VIEWS_PAGES, filepath);

                // render file to html and save

                let contents = pretty(pug.renderFile(filepath, { basedir: VIEWS_ROOT }), { ocd: true });

                let targetpath = ext(path.join(OUTPUT_DIR, relpath), '.html');
                console.log('%s ==> %s', path.relative(__dirname, filepath), path.relative(__dirname, targetpath));
                
                // create the parent directory, if it doesn't exist
                mkdirp(path.dirname(targetpath), (err) => {
                    if (err) throw err;
                    
                    fs.writeFile(targetpath, contents, 'utf8', (err) => {
                        if (err) throw err;
                        next();
                    });
                });
            }

            else {
                next();
            }
        }

    }
};

walk.walk(VIEWS_PAGES, walkOptions);
