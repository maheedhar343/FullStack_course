### **Experiment 5 - Java Standalone Application for Database CRUD Operations**

we design a `Java standalone application` that connects to a database (Oracle or MySQL), performs `CRUD (Create, Read, Update, Delete) operations` on a `students` table (`id, name, email, age`), and provides a `menu-driven console interface` for user interaction.

**Prerequisites**

* Java JDK installed on your system.
* MySQL or Oracle database installed and running.
   * [Oracle JDBC Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/21/jjdbc/)
   * [MySQL Connector/J Documentation](https://dev.mysql.com/doc/connector-j/8.0/en/)

* JDBC driver for your database (`mysql-connector-java.jar` for MySQL or `ojdbc8.jar` for Oracle).
* IDE or code editor like Eclipse, IntelliJ IDEA, or Visual Studio Code.

**Steps**

**1: Setup Project Folder**

* Create a new folder named `JavaCRUDApp`.
* Navigate into the folder.
* Inside the folder, create your Java source files, for example:

  * `Main.java` for main application logic
  * `DatabaseConnection.java` for managing database connections
  * `Student.java` (optional) for student object representation

**2: Setup the Database**

* Open your database management system (Oracle SQL Developer or MySQL Workbench).
* Create a database and define the `students` table with the following fields:

  * `id` – Primary Key, Integer
  * `name` – Text/String
  * `email` – Text/String
  * `age` – Integer

  ![1761106958455](image/ReadMe/1761106958455.png)

* Insert a few sample records for testing purposes.

**3: Connect Java Application to the Database**

* Include the **JDBC driver** in your project classpath.
* Use `DriverManager.getConnection()` to establish a connection to the database.
* Create reusable methods for opening and closing database connections to ensure proper resource management.

**4: Design the Menu-Driven Console Interface**

* Implement a console menu that repeatedly displays options to the user, for example:

  1. Add a new student
  2. View all students
  3. Update a student record
  4. Delete a student record
  5. Exit the application
* Use a `do-while` or `while` loop to keep the menu active until the user chooses to exit.
* Read user input using `Scanner` and validate the choice entered.

![1761107035651](image/ReadMe/1761107035651.png)

**5: Implement CRUD Operations**

* `Create`: Prompt the user to enter student details and insert a new record into the database.
   * Implement CREATE Operation - Add Student
   ![1761107076066](image/ReadMe/1761107076066.png)

* `Read`: Retrieve all student records and display them in a formatted table on the console.
   * Implement READ Operation - View Students
      ![1761107107272](image/ReadMe/1761107107272.png)
* `Update`: Allow the user to select a student by `id` and modify details like `name, email, or age`.
      * Implement UPDATE Operation - Modify Student
      ![1761107142284](image/ReadMe/1761107142284.png)
* `Delete`: Allow the user to select a student by `id` and remove the record from the table.
   * Implement DELETE Operation - Remove Student
   ![1761107185990](image/ReadMe/1761107185990.png)
* Organize each operation into separate methods for clarity and maintainability.
   * Modular Design - Method Structure
   ![1761107256065](image/ReadMe/1761107256065.png)

**6: Handle Exceptions and Edge Cases**

* Use `try...catch` blocks to handle `SQLException` and input-related errors.
* Validate inputs to ensure proper data types (e.g., integers for `id` and `age`).
* Display user-friendly error messages and allow retrying in case of invalid inputs.

**7: Verify the Operations**

* Run the Java application and perform all CRUD operations using the menu.
* Check the database to ensure that each operation (add, view, update, delete) is correctly executed.
* Observe how the application behaves with different inputs and ensure smooth user interaction.
