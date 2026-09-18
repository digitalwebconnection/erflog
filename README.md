# Erfolg - Educational Consultancy Platform

Erfolg is a comprehensive full-stack web application designed for educational consulting, student admissions, and alumni networking. It provides a modern interface for students to explore destinations, scholarships, and admission processes, while offering a robust backend for content management.

## 🚀 Features

- **Dynamic Frontend**: A highly interactive UI built with React and Framer Motion.
- **Admin Panel**: A secure, dedicated dashboard for administrators to manage blogs, destinations, admission content, and student leads effectively.
- **Rich Text Editing**: Integrated TipTap editor within the admin panel for creating and formatting blogs and rich content.
- **Student Admissions**: Dedicated modules for admission procedures, including interview and visa guidance.
- **Destinations & Scholarships**: Explore study abroad destinations and scholarship opportunities.
- **Alumni Network**: Connect and view successful alumni stories.
- **Lead Generation**: Built-in lead capture popups for prospective students.
- **Secure Authentication**: JWT-based authentication for secure admin access.
- **Media Management**: Cloudinary integration for handling image uploads.
- **Responsive Design**: Fully responsive layout powered by Tailwind CSS.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Rich Text Editor**: TipTap
- **Icons**: Lucide React & React Icons
- **SEO**: React Helmet Async

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens) & bcryptjs
- **File Uploads**: Multer & Cloudinary
- **Environment Management**: dotenv

## 📁 Project Structure

```
erfolg-root/
├── frontend/       # React frontend application
│   ├── src/
│   │   ├── components/ # UI components (About, Admission, Alumni, etc.)
│   │   └── ...
├── backend/        # Node.js backend application
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/    # API routes (auth, blogs, countries, upload)
│   │   └── config/
│   └── server.js   # Entry point
```

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- Cloudinary Account (for media uploads)

## 🚀 Getting Started

### 1. Install Dependencies
From the root directory, you can install all dependencies (root, frontend, and backend) at once using the custom script:
```bash
npm run install-all
```

### 2. Environment Variables
Create a `.env` file in the `backend` directory and configure the required variables (MongoDB URI, JWT Secret, Cloudinary credentials, etc.).

### 3. Running the Application Locally
You can run both the frontend and backend concurrently from the root directory:
```bash
npm run dev
```

### Available Scripts (Root)
- `npm run dev`: Starts both frontend and backend in development mode using concurrently.
- `npm run install-all`: Installs node_modules in root, frontend, and backend directories.
- `npm run frontend-dev`: Starts only the frontend dev server.
- `npm run backend-dev`: Starts only the backend dev server.
- `npm run build`: Builds the frontend for production.
