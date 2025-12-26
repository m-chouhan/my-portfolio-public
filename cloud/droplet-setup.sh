#!/bin/bash
set -e

echo "=== Starting Cloud Server Setup ==="

# 1. Update system
echo "Updating system packages..."
apt-get update
apt-get upgrade -y

# 2. Install Docker
echo "Installing Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    echo "Docker installed: $(docker --version)"
else
    echo "Docker already installed: $(docker --version)"
fi

# 3. Install Docker Compose
echo "Installing Docker Compose..."
if ! docker compose version &> /dev/null; then
    apt-get install -y docker-compose-plugin
    echo "Docker Compose installed: $(docker compose version)"
else
    echo "Docker Compose already installed: $(docker compose version)"
fi

# 4. Install Nginx
echo "Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    apt-get install -y nginx
    systemctl enable nginx
    echo "Nginx installed: $(nginx -v)"
else
    echo "Nginx already installed: $(nginx -v)"
fi

# 5. Install Certbot for SSL
echo "Installing Certbot..."
if ! command -v certbot &> /dev/null; then
    apt-get install -y certbot python3-certbot-nginx
    echo "Certbot installed"
else
    echo "Certbot already installed"
fi

# 6. Setup firewall
echo "Configuring firewall..."
if command -v ufw &> /dev/null; then
    ufw allow 22/tcp
    ufw allow 80/tcp
    ufw allow 443/tcp
    ufw --force enable || true
    echo "Firewall configured"
fi

# 7. Create nginx sites directory if needed
mkdir -p /etc/nginx/sites-available
mkdir -p /etc/nginx/sites-enabled

echo "=== Setup Complete ==="
echo ""
echo "Next steps:"
echo "1. Copy nginx config: scp cloud/nginx/portfolio.conf root@SERVER:/etc/nginx/sites-available/"
echo "2. Enable site: ln -s /etc/nginx/sites-available/portfolio.conf /etc/nginx/sites-enabled/"
echo "3. Test nginx: nginx -t"
echo "4. Reload nginx: systemctl reload nginx"
echo "5. Setup SSL: certbot --nginx -d yourdomain.com"

