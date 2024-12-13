# User Dashboard Frontend

A modern React-based user dashboard with authentication, profile management, and settings.

## Features

- 🔐 User authentication (login/register)
- 👤 Profile management
- ⚙️ User settings
- 🎨 Responsive design with Tailwind CSS
- 🔄 State management with Zustand
- 📱 Mobile-friendly interface

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Installation

1. Clone the repository:
```bash
git clone https://github.com/andrew-veriga/user-dashboard-frontend.git
cd user-dashboard-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:8000/api
```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── api/          # API integration
├── components/   # Reusable components
├── pages/        # Page components
├── stores/       # Zustand stores
└── types/        # TypeScript types
```

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router
- Headless UI

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.