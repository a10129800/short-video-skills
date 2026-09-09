@echo off
chcp 65001 >nul
echo ========================================================
echo   AI Short Video Skills Suite - GitHub Pages 一鍵部署
echo ========================================================
echo.

:: 檢查 Git 是否安裝
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [錯誤] 找不到 Git！請確認您的電腦已安裝 Git。
    pause
    exit /b
)

:: 初始化 Git 倉庫
if not exist ".git" (
    echo [*] 正在初始化 Git 倉庫...
    git init
)

echo [*] 加入所有網頁與技能檔案...
git add .

echo [*] 建立提交紀錄...
git commit -m "feat: deploy AI Video Skills Portal to GitHub Pages"

echo [*] 切換至 main 分支...
git branch -M main

:: 詢問 GitHub 倉庫網址
echo.
set /p REPO_URL="請輸入您的 GitHub 倉庫網址 (例如 https://github.com/username/short-video-skills.git): "

if "%REPO_URL%"=="" (
    echo [警告] 未輸入網址，跳過推送。您可以稍後自行執行 git remote add origin ^<網址^> 及 git push。
    pause
    exit /b
)

:: 設定遠端分支
git remote remove origin >nul 2>nul
git remote add origin %REPO_URL%

echo.
echo [*] 正在推送到 GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   [成功] 程式碼已成功推送到 GitHub！
    echo ========================================================
    echo.
    echo 下一步：開啟 GitHub Pages 服務
    echo 1. 開啟您的 GitHub 倉庫頁面
    echo 2. 點擊 Settings -^> Pages
    echo 3. 在 Source 選擇 Deploy from a branch
    echo 4. Branch 選擇 main，目錄選擇 /(root)，點擊 Save
    echo 5. 約等待 30 秒即可在 https://^<username^>.github.io/^<repo^>/ 瀏覽！
    echo.
) else (
    echo.
    echo [提示] 推送時遭遇驗證或網路問題，請確認您已登入 GitHub 帳號並具備該倉庫的寫入權限。
)

pause
