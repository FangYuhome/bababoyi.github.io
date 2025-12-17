@echo off
echo 启动本地HTTP服务器...
echo.
echo 请等待服务器启动，然后访问：http://localhost:8080
echo 按Ctrl+C可以停止服务器
echo.
cd /d "%~dp0"
python -m http.server 8080
pause