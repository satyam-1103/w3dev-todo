# Todo Application

This project consists of a frontend and a backend application.

## Prerequisites

- Docker installed on your machine
- Node installed on your machine

## Backend Setup

### Running the Backend

1. Navigate to the root directory of the backend application.
2. Build the Docker image using the following command:
   ```bash
   docker build -t backend_image .
   ```
3. Once the image is built, run the Docker container:

```bash
    docker run -p 5000:5000 backend
```

This command will start the backend application, and it will be accessible at http://localhost:5000.

## Frontend Setup

### Running the Frontend

1. Navigate to the root directory of the frontend application.
2. Build the Docker image using the following command:

```bash
docker build -t frontend_image .
```

3. Once the image is built, run the Docker container:

```bash
docker run -p 3000:3000 frontend_image
```

This command will start the frontend application, and it will be accessible at http://localhost:3000.

# Note

1. Ensure that the backend application is running before starting the frontend application, as the frontend may depend on the backend APIs.
