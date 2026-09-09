# AI Short Video Skills Suite - PowerShell GitHub 部署腳本
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "   AI Short Video Skills Suite - GitHub Pages 部署助手" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

# 檢查 Git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "[錯誤] 未找到 Git，請先安裝 Git for Windows。" -ForegroundColor Red
    Pause
    exit
}

# 1. 初始化
if (-not (Test-Path ".git")) {
    Write-Host "[*] 正在初始化本地 Git 倉庫..." -ForegroundColor Yellow
    git init
}

# 2. 暫存與提交
Write-Host "[*] 正在暫存所有檔案..." -ForegroundColor Yellow
git add .

Write-Host "[*] 正在建立 Commit..." -ForegroundColor Yellow
git commit -m "feat: deploy AI Video Skills Portal to GitHub Pages"

# 3. 分支名稱設為 main
git branch -M main

# 4. 輸入倉庫網址
Write-Host ""
$repoUrl = Read-Host "請輸入您的 GitHub 倉庫 URL (例如 https://github.com/username/short-video-skills.git)"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "[提示] 未提供遠端網址，已完成本地 Commit。您可以稍後自行執行 git push。" -ForegroundColor Yellow
    Pause
    exit
}

# 5. 綁定遠端並推送
git remote remove origin 2>$null
git remote add origin $repoUrl

Write-Host ""
Write-Host "[*] 正在推送代碼至 GitHub ($repoUrl)..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================================" -ForegroundColor Green
    Write-Host "   [成功] 程式碼已成功推送到 GitHub！" -ForegroundColor Green
    Write-Host "========================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "【最後一步：啟用 GitHub Pages】" -ForegroundColor Yellow
    Write-Host "1. 開啟 GitHub 該倉庫頁面"
    Write-Host "2. 點擊頂部 Settings -> 左側 Pages"
    Write-Host "3. 在 Build and deployment > Source 選擇 'Deploy from a branch'"
    Write-Host "4. Branch 選擇 'main'，資料夾選擇 '/(root)'，點擊 'Save'"
    Write-Host "5. 約 30 秒後即可在 https://<your-username>.github.io/<your-repo>/ 訪問您的官方單頁！" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "[提示] 推送未完成，請確認您已登入 GitHub 並對該倉庫有寫入權限。" -ForegroundColor Red
}

Write-Host ""
Pause
