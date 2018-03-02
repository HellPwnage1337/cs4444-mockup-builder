const argv = require('minimist')(process.argv.slice(2));

if (argv['_'].length === 0) {
    console.error("  *** ERROR: clean.js requires at least one argument");
    process.exit(1);
    return;
}

const path = require('path');
const walk = require('walk');
const fs   = require('fs');

const walkOptions = {
    listeners: {

        file: (root, stats, next) => {
            if (stats.type == 'file' && stats.name.match(/^.+\.html$/))
            {
                let filepath = path.join(root, stats.name);
                fs.unlink(filepath, (err) => {
                    if (err) return console.error('unable to delete file %s: %s', filepath, err);
                    return console.log('deleted file:', filepath);
                });
            }
        
            next();
        }
        
    }
}

function walkDir(dir) {
    let realpath = path.join(__dirname, dir);
    console.log(`clean directory ==> ${realpath}`);
    walk.walk(realpath, walkOptions);
};

argv['_'].forEach(walkDir);
