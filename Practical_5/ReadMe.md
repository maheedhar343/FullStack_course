## **Title:**

**Java Standalone Application for Database CRUD Operations**

---

## **Objective**

* Learn to develop a **Java standalone application** that interacts with a database (MySQL/Oracle).
* Implement  **CRUD operations** : Create, Read, Update, Delete on database tables.
* Understand  **JDBC connectivity, prepared statements, and exception handling** .
* Design a simple **console-based user interface** for database management.

---

## **Task Description**

Develop a **Java console application** that connects to a database and allows the user to manage student records.

### Steps to Perform:

1. **Set up a database** (MySQL or Oracle) and create a table `students` with fields:
   * `id` (INT, primary key, auto-increment)
   * `name` (VARCHAR)
   * `email` (VARCHAR)
   * `age` (INT)
2. Create a **Java project** and add the **JDBC driver** for the chosen database.
3. Design a **menu-driven console application** that allows users to:
   * Add a new student record (Create)
   * View all student records (Read)
   * Update an existing student record (Update)
   * Delete a student record (Delete)
4. Use **PreparedStatement** for all database operations to prevent SQL injection.
5. Implement **exception handling** to manage database errors.
6. Display **operation success/failure messages** to the user.
7. Make the application modular: create  **methods for each CRUD operation** .
8. Test the application thoroughly with multiple student entries.
