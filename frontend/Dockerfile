ARG NODE_ENV=development

# Base stage for installing dependencies
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Development stage: Run dev server
FROM base AS development
EXPOSE 3000
CMD ["npm", "start"]

# Production stage: Build and serve with nginx
FROM base AS builder
ARG NODE_ENV=production
RUN npm run build

FROM nginx:alpine AS production
COPY --from=builder /app/build /usr/share/nginx/html
RUN echo 'server{listen 80;root /usr/share/nginx/html;location /{try_files $uri $uri/ /index.html;}}' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
