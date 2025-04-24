# Frontend de la Aplicación Dockerizada

Este repositorio contiene el frontend de la aplicación, que está dockerizado para facilitar su configuración y despliegue.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- [Docker](https://www.docker.com/get-started) (para ejecutar contenedores)
- [Docker Compose](https://docs.docker.com/compose/install/) (opcional, para orquestar múltiples contenedores, si es necesario)

## Pasos para Instalar y Configurar el Frontend

### 1. Clonar el Repositorio

Clona este repositorio a tu máquina local:

```bash
git clone <url_del_repositorio>
cd <nombre_del_repositorio>

docker build -t frontend-app .
3. Ejecutar el Contenedor
Para ejecutar el contenedor y poner en marcha el frontend, usa el siguiente comando:

bash
Copiar
Editar
docker run -p 80:80 frontend-app

4. Verificar el Funcionamiento
Abre tu navegador y visita:

arduino
Copiar
Editar
http://localhost
