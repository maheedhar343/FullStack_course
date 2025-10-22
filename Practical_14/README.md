# Experiment 14 – React TODO Application with GitHub Deployment

Create a React-based TODO application with necessary components and deploy it to GitHub Pages.

---


## Steps

1. **Create React App**
   * `npx create-react-app TodoApp`
   * Navigate to project folder: `cd TodoApp`
2. **Install Dependencies**
   * React Router Dom for routing: `npm install react-router-dom`
3. **Create Components**
   * Header for title/navigation.
   * AddTodo for adding new tasks.
   * TodoList for listing all tasks.
   * TodoItem for each individual task with delete/check functionality.
4. **Implement Functionality**
   * State management for TODO list using `useState`.
   * Add, delete, and mark tasks as complete.
   * Optional: Save tasks in `localStorage` to persist on refresh.
5. **Styling**
   * Add basic CSS for clean UI.
   * Responsive layout.
6. **Test Application Locally**
   * Run using `npm start` at `http://localhost:3000`.
7. **Deploy to GitHub**
   * Initialize Git: `git init`
   * Create GitHub repository.
   * Install GitHub Pages package: `npm install gh-pages --save-dev`
   * Add deploy scripts in `package.json`.
   * Push project to GitHub.
   * Deploy using `npm run deploy`.
