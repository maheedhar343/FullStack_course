import java.sql.*;
import java.util.Scanner;

public class StudentCRUD {
    private static final String URL = "jdbc:mysql://localhost:3306/student_db";
    private static final String USER = "root";
    private static final String PASS = "your_password";

    private static Connection conn;

    public static void main(String[] args) {
        try {
            conn = DriverManager.getConnection(URL, USER, PASS);
            Scanner sc = new Scanner(System.in);
            int choice;
            do {
                System.out.println("\n--- Student Management ---");
                System.out.println("1. Add Student");
                System.out.println("2. View Students");
                System.out.println("3. Update Student");
                System.out.println("4. Delete Student");
                System.out.println("5. Exit");
                System.out.print("Enter your choice: ");
                choice = sc.nextInt();
                sc.nextLine(); // consume newline

                switch(choice) {
                    case 1: addStudent(sc); break;
                    case 2: viewStudents(); break;
                    case 3: updateStudent(sc); break;
                    case 4: deleteStudent(sc); break;
                    case 5: System.out.println("Exiting..."); break;
                    default: System.out.println("Invalid choice");
                }
            } while(choice != 5);

        } catch(SQLException e) {
            e.printStackTrace();
        }
    }

    private static void addStudent(Scanner sc) throws SQLException {
        System.out.print("Enter name: ");
        String name = sc.nextLine();
        System.out.print("Enter email: ");
        String email = sc.nextLine();
        System.out.print("Enter age: ");
        int age = sc.nextInt();
        sc.nextLine();

        String sql = "INSERT INTO students (name, email, age) VALUES (?, ?, ?)";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, name);
        ps.setString(2, email);
        ps.setInt(3, age);

        int rows = ps.executeUpdate();
        System.out.println(rows > 0 ? "Student added successfully" : "Failed to add student");
    }

    private static void viewStudents() throws SQLException {
        String sql = "SELECT * FROM students";
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery(sql);

        System.out.println("\n--- Student Records ---");
        while(rs.next()) {
            System.out.println("ID: " + rs.getInt("id") +
                               ", Name: " + rs.getString("name") +
                               ", Email: " + rs.getString("email") +
                               ", Age: " + rs.getInt("age"));
        }
    }

    private static void updateStudent(Scanner sc) throws SQLException {
        System.out.print("Enter student ID to update: ");
        int id = sc.nextInt();
        sc.nextLine();
        System.out.print("Enter new name: ");
        String name = sc.nextLine();
        System.out.print("Enter new email: ");
        String email = sc.nextLine();
        System.out.print("Enter new age: ");
        int age = sc.nextInt();
        sc.nextLine();

        String sql = "UPDATE students SET name=?, email=?, age=? WHERE id=?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, name);
        ps.setString(2, email);
        ps.setInt(3, age);
        ps.setInt(4, id);

        int rows = ps.executeUpdate();
        System.out.println(rows > 0 ? "Student updated successfully" : "Failed to update student");
    }

    private static void deleteStudent(Scanner sc) throws SQLException {
        System.out.print("Enter student ID to delete: ");
        int id = sc.nextInt();
        sc.nextLine();

        String sql = "DELETE FROM students WHERE id=?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setInt(1, id);

        int rows = ps.executeUpdate();
        System.out.println(rows > 0 ? "Student deleted successfully" : "Failed to delete student");
    }
}
