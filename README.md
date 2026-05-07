# NestJS TypeORM MySQL

A production-ready backend application built with NestJS, TypeORM, and MySQL. This project demonstrates best practices for building scalable, maintainable REST APIs with TypeScript.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Project Overview

This repository provides a complete backend solution using NestJS (a progressive Node.js framework), TypeORM (an ORM for TypeScript and JavaScript), and MySQL as the database. It serves as a template for building scalable microservices and REST APIs with proper architecture, validation, and error handling.

## ✨ Features

- **RESTful API** - Well-structured REST endpoints with proper HTTP methods
- **Database ORM** - TypeORM for type-safe database operations
- **Validation** - Input validation using class-validator decorators
- **Error Handling** - Comprehensive error handling and custom exceptions
- **Authentication** - JWT-based authentication support
- **Logging** - Built-in logging service for debugging and monitoring
- **Environment Configuration** - Configurable settings via environment variables
- **Type Safety** - Full TypeScript support with strict mode
- **Database Migrations** - TypeORM migration support for schema versioning

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: [NestJS](https://nestjs.com/) v10+
- **Language**: TypeScript
- **ORM**: [TypeORM](https://typeorm.io/)
- **Database**: MySQL 8.0+
- **Validation**: class-validator
- **API Documentation**: Swagger/OpenAPI
- **Package Manager**: npm / yarn

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MySQL 8.0+

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nestjs-typeorm-mysql.git
   cd nestjs-typeorm-mysql
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your MySQL credentials:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=root
   DB_PASSWORD=your_password
   DB_DATABASE=nestjs_db
   JWT_SECRET=your_jwt_secret
   ```

4. **Create database**
   ```bash
   mysql -u root -p
   CREATE DATABASE nestjs_db;
   EXIT;
   ```

5. **Run migrations**
   ```bash
   npm run typeorm migration:run
   ```

6. **Start the application**
   ```bash
   npm run start
   ```

   Application will be available at `http://localhost:3000`

## 🚀 Usage

### Development

```bash
# Development mode with hot reload
npm run start:dev

# Debug mode
npm run start:debug
```

### Production

```bash
# Build the project
npm run build

# Start production server
npm run start:prod
```

### Database Commands

```bash
# Generate new migration
npm run typeorm migration:generate -- -n MigrationName

# Create empty migration
npm run typeorm migration:create -- -n MigrationName

# Revert last migration
npm run typeorm migration:revert

# Show migrations
npm run typeorm migration:show
```

### Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📁 Project Structure

```
src/
├── modules/
│   ├── auth/
│   │   ├── auth.service.ts
│   │   ├── auth.controller.ts
│   │   └── auth.module.ts
│   ├── users/
│   │   ├── entities/
│   │   │   └── user.entity.ts
│   │   ├── users.service.ts
│   │   ├── users.controller.ts
│   │   ├── dto/
│   │   │   ├── create-user.dto.ts
│   │   │   └── update-user.dto.ts
│   │   └── users.module.ts
│   └── [other modules]/
├── common/
│   ├── decorators/
│   ├── filters/
│   ├── guards/
│   ├── interceptors/
│   └── exceptions/
├── database/
│   ├── migrations/
│   └── seeds/
├── config/
│   └── database.config.ts
├── app.module.ts
└── main.ts
database/
├── migrations/
test/
├── app.e2e-spec.ts
└── jest-e2e.json
```

## 🔌 API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh JWT token
- `POST /auth/logout` - User logout

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user
- `GET /users/:id/profile` - Get user profile

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ using NestJS & TypeORM**
