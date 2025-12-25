FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG NODE_ENV=development
RUN echo "Building with NODE_ENV=${NODE_ENV}" && \
    if [ -f ".env.${NODE_ENV}" ]; then \
      echo "Copying .env.${NODE_ENV} to .env" && \
      cp ".env.${NODE_ENV}" .env && \
      echo "Contents of .env:" && \
      cat .env; \
    else \
      echo "WARNING: .env.${NODE_ENV} not found!"; \
    fi
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN echo 'server{listen 80;root /usr/share/nginx/html;location /{try_files $uri $uri/ /index.html;}}' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

