@echo off
cls

:PreClean
echo pre-cleaning temp_output directory
node clean.js temp_output/

:CopyStatic
echo.
echo copying new files from static directory
xcopy static output\static /y /e /s /d

:Build
echo.
node build.js

:CopyBuilt
echo.
echo copying new files from temp_output/ to output/
xcopy temp_output output /y /e /s /d

:Cleanup
echo.
echo cleaning temp_output directory once more
node clean.js temp_output/

:Serve
echo.
node server.js
