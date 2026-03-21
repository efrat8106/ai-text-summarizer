# Project Context & Rules

## Tech Stack
- Language: TypeScript / JavaScript
- Framework: React
- Backend: Node.js
- AI Integration: OpenAI API

## The Goal
Build a web application that receives text input from the user and generates an AI-powered summary.

## Architecture Rules
1. Client and server must be separated into different folders.
2. All API calls must go through the server layer.
3. Environment variables must be stored in .env files and never committed to GitHub.

## Style Guide
- Naming Convention: camelCase for variables and functions
- Components must use PascalCase
- Use async/await for API requests


Backend Rules for AI:

Use Node.js with Express.

Always include Validation using a library like Joi or manual checks.

Use Async/Await for all asynchronous operations.

Structure: Use Controllers and Routes (Separation of Concerns).

Error Handling: Always include try-catch blocks and meaningful error messages.

Data: Use realistic Hebrew dummy data for summaries.