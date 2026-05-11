# Task Management API

A RESTful backend API built with Spring Boot, featuring JWT authentication, Redis caching, and AWS deployment.

## Tech Stack
- **Framework**: Spring Boot, MyBatis-Plus
- **Database**: MySQL (AWS RDS)
- **Cache**: Redis
- **Security**: Spring Security, JWT, BCrypt
- **Deployment**: AWS EC2 + RDS

## Features
- User registration and login with BCrypt password encryption
- JWT-based stateless authentication
- Role-based data isolation (users can only access their own data)
- Redis cache-aside pattern with write-invalidation strategy
- Full CRUD operations for todo management

## Architecture
Three-tier architecture: Controller → Service → Mapper

## Setup
1. Clone the repository
2. Copy `application.properties.example` to `application.properties`
3. Fill in your database and Redis configuration
4. Run `./mvnw spring-boot:run`

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /user/register | Register a new user |
| POST | /user/login | Login and get JWT token |
| GET | /todo | Get all todos (requires token) |
| POST | /todo | Create a todo (requires token) |
| PUT | /todo | Update a todo (requires token) |
| DELETE | /todo/{id} | Delete a todo (requires token) |