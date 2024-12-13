# User Dashboard Backend

A FastAPI-based backend service for the User Dashboard application with PostgreSQL database.

## Features

- 🔐 JWT Authentication
- 👤 User Management
- 🔒 Password Hashing
- 📝 Profile Updates
- 🗃️ PostgreSQL Database
- 📚 API Documentation (Swagger UI)

## Prerequisites

- Python 3.9 or later
- PostgreSQL 12 or later
- pip (Python package manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/andrew-veriga/user-dashboard-backend.git
cd user-dashboard-backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the backend directory:
```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/user_dashboard
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

5. Set up the database:
```bash
# Create database
psql -U postgres
CREATE DATABASE user_dashboard;
\q

# Run migrations
alembic upgrade head
```

## Running the Application

Start the development server:
```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`
API documentation will be available at `http://localhost:8000/docs`

## Project Structure

```
backend/
├── alembic/        # Database migrations
├── app/
│   ├── routers/    # API routes
│   ├── models.py   # Database models
│   ├── schemas.py  # Pydantic schemas
│   └── main.py     # Application entry point
└── tests/          # Test files
```

## API Endpoints

- `POST /api/token` - Login
- `POST /api/register` - Register new user
- `GET /api/users/me` - Get current user
- `PUT /api/users/me` - Update user profile

## Database Migrations

Create a new migration:
```bash
alembic revision --autogenerate -m "Migration message"
```

Apply migrations:
```bash
alembic upgrade head
```

## Testing

Run tests:
```bash
pytest
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.