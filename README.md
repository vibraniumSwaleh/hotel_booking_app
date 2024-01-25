# Hotel Booking Application

![Hotel Booking Main page](/client/public/Booking_App.png)

A hotel booking application built with the MERN (MongoDB, Express.js, React, Node.js) stack, using Vite for the frontend. It's an Airbnb clone with all it's functionality.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a full-stack hotel booking application developed with the MERN stack, featuring a modern and fast frontend built with Vite. The goal of this project is to provide a foundation for building real-world applications with a focus on scalability and performance.

## Features

- **Full-Stack:** Utilizes the MERN stack for both frontend and backend.
- **Vite for Frontend:** Fast and efficient development experience with Vite.
- **Tailwind for Frontend:** Rapid and responsive UI development with Tailwind CSS.
- **Hotel Booking Application:** Includes essential features inspired by the Airbnb platform.
- **Scalable and Modular:** Project structured for scalability and easy maintenance.

* Create, read, update, and delete listings
* User authentication and authorization
* Real-time messaging with Socket.IO
* Search functionality
* Stripe integration for payments

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB installed and running
- Your MongoDB connection string ready
- Git (optional)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/vibraniumSwaleh/hotel_booking_app.git
    ```

2. **Install dependencies:**

    ```bash
    cd hotel_booking_app/client
    npm install

    cd ../api
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `server` directory with the following content:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=4000
    ```

4. **Run the application:**

    ```bash
    # Start the backend
    cd api
    npm start

    # Start the frontend
    cd ../client
    npm install
    npm run dev
    ```

5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

The project structure is organized as follows:

- `client/`: Frontend (Vite)
- `api/`: Backend (Express.js)
- `.gitignore`: Git ignore file
- `README.md`: Project documentation
- `package.json`: Project metadata and dependencies

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
