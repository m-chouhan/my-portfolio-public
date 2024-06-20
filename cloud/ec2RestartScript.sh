#!/bin/bash
if [ -d "/home/ec2-user/backend" ]; then
    rm -rf /home/ec2-user/backend
fi
unzip -o /home/ec2-user/backend.zip -d /home/ec2-user/backend
cd /home/ec2-user/backend
pm2 restart all || pm2 start src/server.js