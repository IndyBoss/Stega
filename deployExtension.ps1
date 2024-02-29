Write-Host ""
Write-Host "--- Builder started ---" -ForegroundColor cyan
Write-Host ""
$originalLocation = Get-Location
$buildStart = Get-Date -Format "dd/MM/yyyy HH:mm"
$defaultPath = "W:\Business"

Write-Host ""
Write-Host "Dir: $defaultPath\Stega" -ForegroundColor green
Set-Location -Path "$defaultPath\Stega"
& git checkout main
& git pull
& yarn
& yarn build

Write-Host ""
Write-Host "Dir: $defaultPath\Stega-extension" -ForegroundColor green
Set-Location -Path "$defaultPath\Stega-extension"
& git checkout extension
& git pull
if (Test-Path -Path "$defaultPath\Stega-extension\build") {
    Remove-Item "$defaultPath\Stega-extension\build" -Recurse
}
Move-Item -Path "$defaultPath\Stega\build" -Destination "$defaultPath\Stega-extension"
if (Test-Path -Path "$defaultPath\Stega-extension\build\manifest.json") {
    Remove-Item "$defaultPath\Stega-extension\build\manifest.json"
}
Copy-Item -Path "$defaultPath\Stega\extension\manifest.json" -Destination "$defaultPath\Stega-extension\build"
& git add .
& git commit -m "deploy $buildStart"
& git push

Set-Location -Path $originalLocation
Write-Host ""
Write-Host "--- Builder end ---" -ForegroundColor cyan
Write-Host ""