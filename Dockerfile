# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app


COPY PruebaTecnica/package.json PruebaTecnica/package-lock.json ./


RUN npm install --legacy-peer-deps


COPY PruebaTecnica/ .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]