# Git Push Script for Southbroom Dental
Write-Host "=== Git Push Script ===" -ForegroundColor Cyan

# Navigate to project directory
$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectPath

Write-Host "`n1. Checking git status..." -ForegroundColor Yellow
git status

Write-Host "`n2. Checking remote configuration..." -ForegroundColor Yellow
git remote -v

Write-Host "`n3. Checking current branch..." -ForegroundColor Yellow
git branch

Write-Host "`n4. Checking if there are commits..." -ForegroundColor Yellow
$commitCount = (git log --oneline 2>&1 | Measure-Object -Line).Lines
Write-Host "Commits found: $commitCount"

if ($commitCount -eq 0) {
    Write-Host "`n5. No commits found. Creating initial commit..." -ForegroundColor Yellow
    git add -A
    git commit -m "Initial commit: Southbroom Dental website with security implementation"
}

Write-Host "`n6. Attempting to push to GitHub..." -ForegroundColor Yellow
Write-Host "If you see authentication errors, you may need to:" -ForegroundColor Magenta
Write-Host "  - Use a Personal Access Token (PAT) as password" -ForegroundColor Magenta
Write-Host "  - Or use: gh auth login" -ForegroundColor Magenta
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Push successful!" -ForegroundColor Green
    Write-Host "Check your repository at: https://github.com/regardtvdr/southbroom-dental" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Push failed with exit code: $LASTEXITCODE" -ForegroundColor Red
    Write-Host "Please check the error message above." -ForegroundColor Yellow
}

Write-Host "`n=== Script Complete ===" -ForegroundColor Cyan
