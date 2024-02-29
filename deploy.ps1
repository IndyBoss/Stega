Write-Host ""
Write-Host "--- Builder started ---" -ForegroundColor cyan
Write-Host ""
$originalLocation = Get-Location
$buildStart = Get-Date -Format "MM/dd/yyyy HH:mm"
$defaultPath = "W:\Business"

Write-Host ""
Write-Host "Dir: $defaultPath\Stega" -ForegroundColor green
Set-Location -Path "$defaultPath\Stega"
& git checkout main
& git pull
& yarn
& yarn build

Write-Host ""
Write-Host "Dir: $defaultPath\Stega-deploy" -ForegroundColor green
Set-Location -Path "$defaultPath\Stega-deploy"
& git checkout deploy
& git pull
if (Test-Path -Path "$defaultPath\Stega-deploy\build") {
    Remove-Item "$defaultPath\Stega-deploy\build" -Recurse
}
Move-Item -Path "$defaultPath\Stega\build" -Destination "$defaultPath\Stega-deploy"
& git add .
& git commit -m "deploy $buildStart"
& git push

Set-Location -Path $originalLocation
Write-Host ""
Write-Host "--- Builder end ---" -ForegroundColor cyan
Write-Host ""