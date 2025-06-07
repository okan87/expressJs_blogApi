# Express.js Blog API

A simple RESTful Blog API built with Express.js and MongoDB (Mongoose). Supports basic CRUD (Create, Read, Update, Delete) operations for managing blog posts, with centralized error handling.

## Features

- Fast and minimalist API with Express.js
- MongoDB & Mongoose for data modeling
- Centralized error handling (`errorHandler.js`)
- Modern async/await structure
- Automatic error catching with `express-async-errors`
- **AI-powered blog summarization using OpenAI GPT-3.5**

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/okan87/expressJs_blogApi.git
    cd expressJs_blogApi
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    - Create a `.env` file and add your MongoDB connection string and OpenAI API key:
      ```
      MONGODB=mongodb://localhost:27017/blogApi
      OPENAI_API_KEY=your_openai_api_key
      ```

4. **Start the server:**
    ```bash
    npm start
    ```

## API Endpoints

| Method | URL                           | Description                        |
|--------|-------------------------------|------------------------------------|
| GET    | /post                         | List all blog posts                |
| POST   | /post                         | Create a new post                  |
| GET    | /post/:id                     | Get a single post                  |
| PUT    | /post/:id                     | Update a post                      |
| DELETE | /post/:id                     | Delete a post                      |
| GET    | /api/blogs                    | List all blog posts (AI module)    |
| POST   | /api/blogs/:id/summarize      | Get AI-generated summary of a post |

## Notes

- All errors are handled by the centralized `errorHandler.js`.
- Invalid ObjectId requests return a proper error message.
- You can test the API using Postman, Thunder Client, or similar tools.
- For AI features, you must provide a valid OpenAI API key.

## License

MIT