# KOR API

This is the API for the KOR API project, built using Elysia with the Bun runtime. The API provides endpoints for managing users, collections, groups, and questions, along with authentication and authorization features.

## Features

- **User Management**: Register, login, refresh tokens, reset passwords, and update passwords.
- **Collection Management**: Create, read, update, and delete collections.
- **Group Management**: Create groups associated with collections.
- **Question Management**: Manage questions within groups.
- **Authentication**: JWT-based authentication with access and refresh tokens.
- **Password Reset**: Email-based password reset functionality.
- **Swagger Documentation**: API documentation available at `/v1/doc`.

## Technologies

- **Bun**: A fast all-in-one JavaScript runtime.
- **Elysia**: A fast and friendly web framework for Bun.
- **Prisma**: A modern database toolkit for TypeScript and Node.js.
- **PostgreSQL**: The primary database used for storing data.
- **Resend**: For sending transactional emails (e.g., password reset emails).
- **JWT**: JSON Web Tokens for secure authentication.

## Getting Started

### Prerequisites

- **Bun**: Ensure you have Bun installed. You can install it by following the instructions on the [Bun website](https://bun.sh/).
- **PostgreSQL**: Make sure you have a PostgreSQL database running and accessible.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/carfdev-kor-api.git
   cd carfdev-kor-api

2. Install dependencies:
   ```bash
   bun install

3. Set up the environment variables:
   * Create a .env file in the root directory.
   * Add the following variables:
   ```env
   DATABASE_URL="postgres://username:password@localhost:5432/database_name"
   JWT_SECRET_ACCESS="your-access-token-secret"
   JWT_SECRET_REFRESH="your-refresh-token-secret"
   JWT_SECRET_UPDATE="your-update-token-secret"
   RESEND_EMAIL_SECRET="your-resend-api-key"

4. Run database migrations:
   ```bash
   bunx prisma migrate deploy

5. Generate Prisma client:
   ```bash
   bunx prisma generate

### Running the Application

* Start the development server:
   ```bash
   bun run dev

* Build and run the production server:
   ```bash
   bun run build
   bun run start

The API will be available at http://localhost:3000.

## API Documentation

You can access the Swagger documentation at http://localhost:3000/v1/doc. This provides detailed information about all available endpoints, request/response formats, and authentication requirements.

### Endpoints

#### User Endpoints

* POST /api/v1/user/register: Register a new user.
* POST /api/v1/user/login: Login and receive access and refresh tokens.
* GET /api/v1/user/refresh: Refresh the access token using the refresh token.
* POST /api/v1/user/reset-password: Request a password reset email.
* PATCH /api/v1/user/update-password/:token : Update the password using a reset token.

#### Collection Endpoints

* POST /api/v1/collection: Create a new collection.
* GET /api/v1/collection: Get all collections.
* GET /api/v1/collection/:id : Get a specific collection by ID.
* PATCH /api/v1/collection/:id : Update a collection by ID.
* DELETE /api/v1/collection/:id : Delete a collection by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
