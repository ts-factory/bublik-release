---
title: Deployment
---

<!--toc:start-->
- [Frontend](#frontend)
- [Backend](#backend)
<!--toc:end-->

This project consists of both **frontend** and **backend** components, each requiring separate build steps and configurations:

### Frontend

The frontend consists of two primary applications:

1. **Documentation App**  
   A static site for the project's documentation, providing guides and resources for developers and users.
2. **React SPA (Single Page Application)**  
   The main user interface, built with React. It provides a dynamic and interactive experience for users.

### Backend

The backend infrastructure includes the following components:

1. **Django**  
   The primary framework for managing business logic, APIs, and user authentication.
2. **PostgreSQL**  
   A relational database used for storing application data, including user information and other persistent content.
3. **Redis**  
   Used for caching, session management, and handling background tasks.
4. **Celery**  
   A task queue system that handles asynchronous tasks such as email sending, data processing, and more.
5. **RabbitMQ**  
   A message broker used for communication between different backend services and asynchronous task management.
6. **Nginx**  
   A web server and reverse proxy for serving the frontend and routing API requests to the Django application.

To build and deploy the project, you'll need to configure and build both the frontend and backend components. Each component has its specific setup and build instructions, which you can find in the respective documentation pages.
