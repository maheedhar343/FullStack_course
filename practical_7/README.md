### **Experiment 7 – Developing a Servlet-Based Shopping Cart with Database Integration**

we create a dynamic shopping cart web application using **Java Servlets**, **JSP**, and **MySQL** where all data interactions happen through the server.

**Prerequisites**

* **Java JDK 17 or later** installed and added to the system PATH.
* **Apache Tomcat 10 or above** installed and configured.

  * [Apache Tomcat Official Website](https://tomcat.apache.org/)
* **MySQL Server** running locally or remotely accessible.
* **Basic knowledge** of JDBC, JSP, and web application structure.
* **Eclipse IDE, IntelliJ IDEA**, or **VS Code with Java extensions** for development.

**1 : Setup Project Folder**

* Open the terminal and create the project:

  ```
  mkdir StudentManagementApp
  cd StudentManagementApp
  ```
* Create the structure:

  ```
  src/
  ├── model/
  ├── dao/
  ├── controller/
  └── view/
  web/
  ├── WEB-INF/
  └── assets/
  ```
* This continues directly from **Experiment 5** — instead of console I/O, you’ll now use web forms and JSPs.

**2 : Configure Database Connection**

* Reuse the same database:

  ```sql
  USE studentdb;
  ```
* Confirm that the `students` table exists:

  ```sql
  CREATE TABLE students (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      age INT
  );
  ```
* Insert sample data if needed:

  ```sql
  INSERT INTO students (name, email, age)
  VALUES ('Aarav Sharma', 'aarav@example.com', 21),
         ('Diya Patel', 'diya@example.com', 22);
  ```

**3 : Model Layer**

* Inside `model`, create **Student.java** with fields `id`, `name`, `email`, `age`.
* Add constructors, getters, and setters.
* This class represents each record from the `students` table.

**4 : DAO Layer**

* Inside `dao`, create **StudentDAO.java**.
* Include methods:

  * `getAllStudents()`
  * `addStudent(Student s)`
  * `updateStudent(Student s)`
  * `deleteStudent(int id)`
* Reuse or adapt the JDBC code from Experiment 5.
* Store connection details (URL, user, password) securely in constants or a config file.

**5 : Controller Layer (Using Servlets)**

* In the `controller` package, create separate Servlets for each CRUD operation:

  * **AddStudentServlet** – handles registration of a new student.
  * **ViewStudentsServlet** – retrieves and forwards all student data to a JSP page.
  * **UpdateStudentServlet** – updates existing student details.
  * **DeleteStudentServlet** – removes a student record by ID.
* Each Servlet should:

  1. Receive form input from the user (e.g., name, email, age).
  2. Interact with the `StudentDAO` to perform the desired operation.
  3. Forward or redirect the request to an appropriate JSP page for displaying the result.
* Use annotations such as `@WebServlet("/addStudent")` to map each Servlet to a specific URL pattern.
* This controller layer acts as the  **bridge between the database logic and the web interface** .
* Each servlet handles a single operation and forwards data to the appropriate JSP page using:

  ```java
  RequestDispatcher rd = request.getRequestDispatcher("view/viewStudents.jsp");
  rd.forward(request, response);
  ```

**6 : JSP Pages – View Layer**

Inside the `view` folder, create the following JS

**a. registrationForm.jsp**

A page for entering new student details such as Name, Email, and Age.

The form should send data to the **AddStudentServlet** using the POST method.

![1761110843423](image/README/1761109899013.png)

 **b. viewStudents.jsp**

* Displays all student records fetched from the database.
* Use JSTL to loop through the list of students sent from the Servlet.
* Include action buttons for “Update” and “Delete” beside each record.

```jsp
  <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```

  ![1761110754408](image/README/1761110754408.png)

 **c. updateStudent.jsp**

* Allows editing an existing student record.
* When submitted, the data should be passed to the UpdateStudentServlet.

  ![1761110843423](image/README/1761110843423.png)

 **d. success.jsp**

* Displays a confirmation after successful registration or update:

  ```jsp
  <p class="text-success fw-bold">Student record has been successfully saved.</p>
  <a href="viewStudents" class="btn btn-secondary">Back to Records</a>
  ```

---

**7 : Configure web.xml**

* Inside `WEB-INF`, create a `web.xml` file:
* Define Servlet names, classes, and URL mappings for each controller.
* Set a welcome file such as registrationForm.jsp to load by default when the application starts.

```xml
<web-app>
    <servlet>
        <servlet-name>AddStudentServlet</servlet-name>
        <servlet-class>controller.AddStudentServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>AddStudentServlet</servlet-name>
        <url-pattern>/addStudent</url-pattern>
    </servlet-mapping>

    <welcome-file-list>
        <welcome-file>view/registrationForm.jsp</welcome-file>
    </welcome-file-list>
</web-app>
```

---

**8 : Run and Verify**

* Deploy the application on Tomcat.
* Start the server and open:

  ```
  http://localhost:8080/StudentManagementApp/
  ```
* Perform these operations:

  * Register a new student through the Registration Form.
  * View all records.
  * Update or delete specific entries.
* Check that database changes reflect instantly.

### **References**

* [Apache Tomcat Official Website](https://tomcat.apache.org/)
* [MySQL Documentation](https://dev.mysql.com/doc/)
* [Bootstrap 5 Documentation](https://getbootstrap.com/)
* [Oracle Servlet Tutorial](https://docs.oracle.com/javaee/7/tutorial/servlets.htm)
* [JSTL Core Tags Reference](https://docs.oracle.com/javaee/5/jstl/1.1/docs/tlddocs/c.tld.html)
