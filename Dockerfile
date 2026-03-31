# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder
LABEL org.opencontainers.image.title="PULSE-APP"
LABEL org.opencontainers.image.description="Build stage for the PULSE-APP Vite React app"
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files and build
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production
LABEL org.opencontainers.image.title="PULSE-APP"
LABEL org.opencontainers.image.description="Production image for the PULSE-APP Vite React app"

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
