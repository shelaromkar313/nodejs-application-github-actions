# Node.js Application with GitHub Actions CI/CD

This is a sample Node.js Express application that demonstrates a complete CI/CD pipeline using GitHub Actions. Every push to the `main` branch automatically deploys the application to an AWS EC2 instance using Docker and Docker Compose.

## 🚀 Features

- **Node.js Express Server:** A simple REST API server.
- **Dockerized:** Fully containerized application using Docker and Docker Compose.
- **Automated Deployment (CI/CD):** GitHub Actions workflow (`deploy.yaml`) automatically copies files to an AWS EC2 instance and restarts the Docker containers.
- **Native Testing:** Uses Node.js native test runner.

## 📂 Project Structure

- `index.js` - Main Express server application.
- `Dockerfile` & `docker-compose.yml` - Container configurations.
- `.github/workflows/deploy.yaml` - The GitHub Actions CI/CD pipeline.
- `test/app.test.js` - Automated tests.

## 🛠️ Prerequisites for Deployment

To make the GitHub Actions deployment work, you need an AWS EC2 instance (Ubuntu) with Docker installed, and you must configure the following **Repository Secrets** in your GitHub repository:

- `EC2_HOST` - The public IP or DNS of your EC2 instance.
- `EC2_USER` - The username for the EC2 server (usually `ubuntu`).
- `EC2_SSH_KEY` - The complete contents of your `.pem` private key file (must include all newlines and `-----BEGIN RSA PRIVATE KEY-----`).

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the server:**
   ```bash
   npm start
   ```
   The server will start on `http://localhost:8080`.

3. **Run tests:**
   ```bash
   npm test
   ```

## 🐳 Running with Docker Locally

To run the application locally exactly as it runs on the server:

```bash
docker compose up -d --build
```
The app will be accessible at `http://localhost:8080`. To stop the containers, run:
```bash
docker compose down
```
