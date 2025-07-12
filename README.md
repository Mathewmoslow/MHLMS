# Mental Health Learning Management System

This project is a React based LMS focused on mental health nursing concepts. Learners work through a sequence of modules and quizzes while their progress is stored locally in the browser.

## Setup

Use the standard Node workflow:

```bash
npm install
npm start
```

This installs dependencies and starts a development server at `http://localhost:3000`.

## Running tests

Unit tests are executed with React Scripts:

```bash
npm test
```

The default test watcher opens and reruns tests when files change.

## About the modules

The LMS contains 14 modules that introduce topics such as therapeutic communication, medications, crisis intervention and stressors affecting mood, anxiety and personality. Each module includes learning objectives and HTML formatted study material.

At the end of each module a ten question quiz checks understanding. A score of 80% or higher unlocks the next module. After finishing all modules a comprehensive final exam becomes available.

Progress and quiz scores are tracked via local storage so you can return later and continue where you left off.
