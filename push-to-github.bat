@echo off
echo === Git Push Script ===
echo.

cd /d "%~dp0"

echo 1. Checking git status...
git status
echo.

echo 2. Checking remote configuration...
git remote -v
echo.

echo 3. Checking current branch...
git branch
echo.

echo 4. Staging all files...
git add -A
echo.

echo 5. Creating commit (if needed)...
git commit -m "Initial commit: Southbroom Dental website with security implementation"
echo.

echo 6. Attempting to push to GitHub...
echo If authentication is required, use a Personal Access Token (PAT) as your password.
echo.
git push -u origin main
echo.

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Push completed!
    echo Check your repository at: https://github.com/regardtvdr/southbroom-dental
) else (
    echo.
    echo [ERROR] Push failed. Please check the error message above.
)

echo.
echo === Script Complete ===
pause
