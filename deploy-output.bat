@echo off

pushd output
git add .
git commit -m "deploy output"
git push origin master
popd