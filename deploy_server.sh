#!/bin/bash
# deploy_server.sh — executar no servidor 187.77.230.251

set -e

APP_DIR="/opt/foconaprova"
FLUTTER_BIN="/opt/flutter/bin/flutter"
LOG_FILE="/var/log/foconaprova-deploy.log"

echo "=== Deploy iniciado: $(date) ===" | tee -a $LOG_FILE

# 1. Pull do repositório
cd $APP_DIR
git pull origin main 2>&1 | tee -a $LOG_FILE

# 2. Instalar dependências do backend Node.js
npm install --production 2>&1 | tee -a $LOG_FILE

# 3. Build do Flutter Web
cd foco_concurso_app
$FLUTTER_BIN pub get 2>&1 | tee -a $LOG_FILE
$FLUTTER_BIN build web --release --no-tree-shake-icons 2>&1 | tee -a $LOG_FILE
cd ..

# 4. Reiniciar o servidor Node.js (via PM2)
if command -v pm2 &> /dev/null; then
  pm2 reload foconaprova --update-env 2>&1 | tee -a $LOG_FILE
  echo "Reloaded via PM2" | tee -a $LOG_FILE
else
  # Fallback: matar e reiniciar com nohup
  pkill -f "node server.js" || true
  nohup node server.js > /var/log/foconaprova-server.log 2>&1 &
  echo "Server restarted via nohup (PID: $!)" | tee -a $LOG_FILE
fi

echo "=== Deploy concluído: $(date) ===" | tee -a $LOG_FILE
