@echo off
REM deploy_local.bat — roda localmente, faz build e push para o GitHub
REM O Coolify/servidor detecta o push e faz o deploy automático

echo === Foco no Concurso - Deploy Local ===
echo.

REM 1. Stage dos arquivos importantes
echo [1/4] Preparando arquivos...
cmd /c "git add foco_concurso_app\lib\ server.js package-lock.json foco_concurso_app\pubspec.lock"
if %errorlevel% neq 0 goto :error

REM 2. Commit (só se houver mudanças)
echo [2/4] Commitando mudancas...
cmd /c "git diff --cached --quiet || git commit -F commit_msg.txt"

REM 3. Build local do Flutter Web
echo [3/4] Fazendo build do Flutter Web...
cd foco_concurso_app
cmd /c "flutter build web --release --no-tree-shake-icons"
if %errorlevel% neq 0 (
  echo AVISO: Build falhou ou teve avisos. Verifique o log acima.
)
cd ..

REM 4. Push para o GitHub
echo [4/4] Fazendo push para o GitHub (main)...
cmd /c "git push origin main"
if %errorlevel% neq 0 goto :error

echo.
echo === Deploy local concluido com sucesso! ===
echo O Coolify/servidor recebera o push e fara o deploy automatico.
goto :end

:error
echo.
echo === ERRO durante o deploy! Verifique os logs acima. ===
exit /b 1

:end
