Write-Host "--- Builder started ---"
$originalLocation = Get-Location
$defaultPath = "W:\Business"

Write-Host ""
Write-Host "Dir: $defaultPath\Stega" -ForegroundColor green
Set-Location -Path "$defaultPath\Stega"
& git checkout main
& git pull
& yarn build

Write-Host ""
Write-Host "Dir: $defaultPath\Stega-deploy" -ForegroundColor green
Set-Location -Path "$defaultPath\Stega-deploy"
Get-ChildItem -Path "$defaultPath\Stega-deploy" -Include *.* -File -Recurse | foreach { $_.Delete()}
Copy-Item -Path "$defaultPath\Stega\build" -Destination "$defaultPath\Stega-deploy"

Set-Location -Path $originalLocation
Write-Host "--- Builder end ---"