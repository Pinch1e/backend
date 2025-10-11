Write-Host "=== Resetting Medusa Backend ===" -ForegroundColor Cyan

# Remove node modules
if (Test-Path "node_modules") {
    Write-Host "Removing node_modules..."
    Remove-Item -Recurse -Force "node_modules"
}

# Remove package-lock.json
if (Test-Path "package-lock.json") {
    Write-Host "Removing package-lock.json..."
    Remove-Item -Force "package-lock.json"
}

# Remove Medusa cache folder
if (Test-Path ".medusa") {
    Write-Host "Removing .medusa folder..."
    Remove-Item -Recurse -Force ".medusa"
}

# Reinstall dependencies
Write-Host "Installing dependencies..."
npm install

Write-Host "✅ Reset complete! You can now run: npx medusa develop" -ForegroundColor Green
