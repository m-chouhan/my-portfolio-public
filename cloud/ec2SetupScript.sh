#!/bin/bash
# Update the package index
yum update -y

# Install Node.js 20 and npm
curl -sL https://rpm.nodesource.com/setup_20.x | bash -
yum install -y nodejs

# Install PM2 globally
npm install -g pm2

# Create application directory
mkdir -p /home/ec2-user/backend
cd /home/ec2-user/backend

# Set up the environment (e.g., environment variables)
echo "Setting up environment variables"
echo "export NODE_ENV=production" >> /etc/profile.d/nodeapp.sh

# Install application dependencies (if repository is cloned)
# npm ci

# Start the application (assuming src/server.js is the entry point)
# pm2 start src/server.js

# Configure PM2 to start on boot
pm2 startup systemd
