# KR Early Learning

**Status:** In development

[Website](https://krearlylearning.com)

## Screenshot

![Screenshot](frontend/public/github.png)

## Overview

A full-stack MERN application for a daycare, featuring a parent portal and an admin portal. Admins log in to post announcements and upload documents (such as menus and forms), while parents view announcements and download the documents shared with them. Access is role-based: routes are protected on both client and server, and admin-only actions verify the user's role before creating or deleting data. File uploads are handled with Multer and stored on Cloudinary, with only the file URL saved to the database. Built with JWT authentication over HTTP-only cookies, Redux Toolkit for global state, and a custom CSS design system.

## Features

- User registration and login with JWT authentication (HTTP-only cookies)
- Session persistence across page refreshes
- Role-based access control (admin vs. parent)
- Admin portal to create announcements and upload documents
- Parent portal to view announcements and download documents
- PDF/document uploads to Cloudinary via Multer
- Create, view, and delete documents
- Protected routes on both client and server
- Form validation with user-facing error messages
- Empty states when no announcements or documents exist
- Responsive design for mobile and desktop

## Technologies Used

- React
- React Router
- Redux Toolkit
- Node.js / Express
- MongoDB / Mongoose
- JWT authentication
- bcrypt (password hashing)
- Multer (file handling)
- Cloudinary (file storage)
- CSS
- Vite
