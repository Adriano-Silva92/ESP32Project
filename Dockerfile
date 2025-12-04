# syntax=docker/dockerfile:1

# ===========================
#  BASE BUILDER
# ===========================
FROM node:20-slim AS builder

WORKDIR /app

# Copia backend package
COPY package*.json ./
RUN npm install

# Copia backend + frontend completos
COPY . .

# ===== FRONTEND BUILD =====
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Volta pro backend
WORKDIR /app


# ===========================
#  FINAL IMAGE
# ===========================
FROM node:20-slim

WORKDIR /app
ENV NODE_ENV=production

# Copiar todo o backend + frontend buildado
COPY --from=builder /app /app

EXPOSE 3000

CMD ["node", "server.js"]
