# [To-Do App](https://task-list-assignment.vercel.app/)

A simple and elegant **To-Do List** application built with **React**, **TypeScript**, and CSS. This project focuses on **clean design** and **best practices** to create a functional and visually appealing app.

---

## Features

- **View Tasks**: See a list of all your to-do items.
- **Filter Tasks**: Filter tasks by their status: All, Pending, or Completed.
- **Add Tasks**: Add new tasks to your to-do list.
- **Edit Tasks**: Modify the description of an existing task.
- **Delete Tasks**: Remove tasks from the list.
- **Mark as Completed**: Check off tasks when done.


---

## Tech Stack

This project was built with the following technologies:

- **React** (with TypeScript)
- **CSS** (with CSS variables for theme management)
- **Vite** (for development and build optimization)

---

## Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-app
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open the app in your browser:
    ```
    http://localhost:3000/
   ```

---

## File Structure

Here's an overview of the project's file structure:

```
src/
├── components/
│   ├── TodoForm.tsx          // Component for adding new tasks
│   ├── TodoList.tsx          // Component for rendering the task list
│   ├── TodoItem.tsx          // Component for individual task items
│   ├── FilterButtons.tsx     // Component for filter buttons
├── App.tsx                   // Main app component
├── App.css                   // Global styles
├── types.ts                  // Type definitions for the app
├── index.tsx                 // Entry point of the app
```

---

## Design Highlights

- **Clean and Modern UI**: The app uses CSS variables for consistent theming and modern styles.
- **Responsive Design**: Optimized for both desktop and mobile views.
- **Code Organization**: Modular and reusable React components.

---

## How to Use

1. **Add a Task**: Type a task description in the input box and click "Add."
2. **Filter Tasks**: Use the filter buttons (All, Pending, Complete) to view tasks by status.
3. **Edit or Delete Tasks**: Hover over a task to find the edit and delete options.
4. **Mark as Complete**: Check the box next to a task to mark it as done.

---

## Future Enhancements

- **Dark Mode**: Add a theme toggle for dark/light mode.
- **Persistence**: Store tasks in local storage or integrate with a backend.
- **Animations**: Add smooth transitions for task actions.

---

## Contributing

Contributions are welcome! If you'd like to contribute:
1. Fork the project.
2. Create a new branch (`feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

Created by [Felipe Nogueira](https://github.com/felipefn15) – feel free to reach out! 😊
