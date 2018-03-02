#!/bin/bash
clear

echo pre-cleaning output directories
node clean.js output/ temp_output/

echo
echo copying new files from static directory
cp -r ./static ./output

echo
node build.js

echo
echo copying new files from temp_output/ to output/
cp -r ./temp_output/* ./output

echo
echo cleaning temp_output directory once more
node clean.js temp_output/

echo
node server.js
