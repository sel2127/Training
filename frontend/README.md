# Product Upload Frontend

A React Vite frontend application for uploading and managing products with image support.

## Features

- Upload products with name, price, description, and image
- View all uploaded products in a responsive grid layout
- Form validation and error handling
- Modern UI with Tailwind CSS
- Integration with Express.js backend

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Make sure the backend server is running on `http://localhost:5000`

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/pages/` - Page components (UploadPage, ProductsList)
- `src/components/` - Reusable components (Navbar)
- `src/services/` - API service layer
- `src/App.jsx` - Main application component with routing

## API Integration

The frontend connects to the backend API at `http://localhost:5000`:
- `POST /api/products` - Upload new product
- `GET /api/products` - Get all products
- `/uploads` - Static file serving for product images

## Technologies Used

- React 18
- Vite
- React Router
- Axios for API calls
- Tailwind CSS for styling
