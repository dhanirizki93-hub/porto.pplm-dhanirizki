@echo off
title E-Portofolio PPG - Local Server
color 0A
cls
echo ========================================================
echo        🎓 MENJALANKAN E-PORTOFOLIO PPG DI LOCALHOST
echo ========================================================
echo.
echo Sedang memeriksa Python...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [PERINGATAN] Python tidak ditemukan di sistem PATH.
    echo Mencoba membuka index.html langsung di peramban web...
    start "" "index.html"
    pause
    exit /b
)

echo [OK] Python terdeteksi. Memulai server HTTP lokal...
python server.py
pause
