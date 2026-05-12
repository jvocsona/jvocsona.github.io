$node = "C:\Users\jvocs\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if (-not (Test-Path $node)) {
  Write-Error "Bundled Node runtime was not found at $node"
  exit 1
}

Start-Process -FilePath $node -ArgumentList "server.js" -WorkingDirectory $PSScriptRoot
Write-Host "Portfolio site started at http://127.0.0.1:3000"
