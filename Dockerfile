FROM node:18-alpine

WORKDIR /app

COPY PruebaTecnica/package.json PruebaTecnica/package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# Usamos nginx para servir los archivos de build
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
