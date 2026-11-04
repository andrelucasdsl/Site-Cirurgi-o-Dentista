@echo off
chcp 65001 >nul
title Site Dentista - Pre-visualizacao

rem Pasta do projeto (pasta deste arquivo)
cd /d "%~dp0"

rem Node.js: usa o da PATH do sistema; se nao existir, usa a versao portatil
where node >nul 2>nul
if %errorlevel%==0 goto :node_ok

set "NODE_PORTABLE=%TEMP%\opencode\nodejs\node-v26.13.0-win-x64"
if exist "%NODE_PORTABLE%\node.exe" (
  set "PATH=%NODE_PORTABLE%;%PATH%"
  goto :node_ok
)

echo.
echo Node.js nao encontrado neste computador.
echo Instale em https://nodejs.org (versao LTS) e abra este arquivo novamente.
echo.
pause
exit /b 1

:node_ok
echo.
echo ============================================
echo  Site Dentista - Pre-visualizacao
echo  Etapa 1/2: gerando build de producao...
echo ============================================
call npm run build
if errorlevel 1 (
  echo.
  echo O build falhou. Verifique as mensagens acima.
  pause
  exit /b 1
)

echo.
echo ============================================
echo  Etapa 2/2: servidor iniciado.
echo  Abra no navegador: http://localhost:3000
echo  Para encerrar, feche esta janela (Ctrl+C).
echo ============================================
start "" "http://localhost:3000"
call npm run start
pause
