# Estágio 1: Build da aplicação Flutter
FROM ghcr.io/cirruslabs/flutter:stable AS build

# Definir o diretório de trabalho apontando para a pasta do app
WORKDIR /app/foco_concurso_app

# Copiar os arquivos do app
COPY foco_concurso_app/pubspec.* ./
RUN flutter pub get

COPY foco_concurso_app/ .
RUN flutter build web --release

# Estágio 2: Hospedar o site estático usando Nginx
FROM nginx:alpine

# Copiar a compilação web gerada pelo Flutter para o Nginx
COPY --from=build /app/foco_concurso_app/build/web /usr/share/nginx/html

# Expor a porta 80 do container
EXPOSE 80

# Iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
