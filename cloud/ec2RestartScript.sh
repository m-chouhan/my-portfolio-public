#!/bin/bash
if [ -d "/home/ec2-user/backend" ]; then
    rm -rf /home/ec2-user/backend
fi
unzip -o /home/ec2-user/backend.zip -d /home/ec2-user/
cd /home/ec2-user/backend
pm2 restart server || pm2 start src/server.js

# check status of live application 
STATUS=$(pm2 show server | grep status | awk '{print $4}')
if [ "$STATUS" == "online" ]; then
    echo "PM2 process is running successfully"
    exit 0
else
    echo "PM2 restart failed with $STATUS"
    exit 1