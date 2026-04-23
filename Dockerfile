# Estágio 1: Build da aplicação Flutter
FROM ghcr.io/cirruslabs/flutter:stable AS build

WORKDIR /app

# Copiar projeto inteiro para ter acesso ao server.js e app
COPY . .

# Build do Flutter Frontend
WORKDIR /app/foco_concurso_app
RUN flutter pub get
RUN flutter build web --release

# Estágio 2: Node.js API + Static Server
FROM node:18-alpine

WORKDIR /app

# Copiar arquivos do backend
COPY package*.json ./
RUN npm install --production

COPY server.js ./
# Copiar o build do flutter gerado no estágio anterior
COPY --from=build /app/foco_concurso_app/build/web ./foco_concurso_app/build/web
# Copiar o build do painel admin que já está no repositório
COPY foco_admin/dist ./foco_admin/dist

EXPOSE 80

CMD ["npm", "start"]
