@echo off
echo Starting MiniStore Development Servers...
echo.

echo Starting Express.js server...
start "Express Server" cmd /k "cd server && npm run dev"

echo Waiting for server to start...
timeout /t 3 /nobreak > nul

echo Starting Next.js development server...
start "Next.js Server" cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Express.js server: http://localhost:3001
echo Next.js application: http://localhost:3000
echo.
echo Press any key to exit...
pause > nul