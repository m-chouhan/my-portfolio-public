# Personal Portfolio

This repository contains the source code for my personal portfolio website. It consists of a React frontend and a Node.js/Express backend.

## Project Structure

- **frontend/**: React application built with Create React App and Material UI.
- **backend/**: Node.js Express server.
- **cloud/**: Infrastructure scripts and configuration (Nginx, VPS setup).
- **.github/**: CI/CD workflows for automated deployment.

## Getting Started

### Prerequisites

- Docker and Docker Compose
- OR Node.js and npm (if running without Docker)

### Running with Docker (Recommended)

To run the entire application stack locally:

```bash
docker-compose up
```

This will start:
- Frontend at http://localhost:3000
- Backend at http://localhost:3001

### Running Manually

If you prefer to run services individually:

**Backend:**

```bash
cd backend
npm install
npm start
```

The backend server will run on port 3001.

**Frontend:**

```bash
cd frontend
npm install
npm start
```

The frontend application will run on http://localhost:3000.

## Building for Production

To build and run the application in production mode using Docker Compose:

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

This will:
1. Build the production images for frontend and backend
2. Start the containers in detached mode
3. Expose the frontend on port 80 and backend on port 5000 (or configured ports)

## Deployment

The project includes configurations for deployment:
- `docker-compose.prod.yml`: Production Docker Compose setup.
- `cloud/`: Contains Nginx configuration and a setup script for DigitalOcean Droplets.
