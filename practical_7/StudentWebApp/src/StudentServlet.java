package com.student.controller;

import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class StudentServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    // Database credentials
    private static final String DB_URL = "jdbc:mysql://localhost:3306/student_db";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "your_password";
    
    private Connection conn;
    
    @Override
    public void init() throws ServletException {
        try {
            // Load MySQL JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            // Establish connection
            conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
            System.out.println("Database connection established successfully!");
        } catch (ClassNotFoundException | SQLException e) {
            throw new ServletException("Database connection failed", e);
        }
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String action = request.getParameter("action");
        
        if (action == null) {
            action = "view";
        }
        
        try {
            switch (action) {
                case "view":
                    viewStudents(request, response);
                    break;
                case "delete":
                    deleteStudent(request, response);
                    break;
                case "edit":
                    showEditForm(request, response);
                    break;
                default:
                    viewStudents(request, response);
            }
        } catch (SQLException e) {
            throw new ServletException("Database operation failed", e);
        }
    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String action = request.getParameter("action");
        
        try {
            if ("update".equals(action)) {
                updateStudent(request, response);
            } else {
                addStudent(request, response);
            }
        } catch (SQLException e) {
            throw new ServletException("Database operation failed", e);
        }
    }
    
    // CREATE - Add new student
    private void addStudent(HttpServletRequest request, HttpServletResponse response) 
            throws SQLException, IOException {
        
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        int age = Integer.parseInt(request.getParameter("age"));
        
        String sql = "INSERT INTO students (name, email, age) VALUES (?, ?, ?)";
        
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, name);
            ps.setString(2, email);
            ps.setInt(3, age);
            
            int rows = ps.executeUpdate();
            
            if (rows > 0) {
                System.out.println("Student added successfully: " + name);
                response.sendRedirect("registration.html?success=true");
            } else {
                response.sendRedirect("registration.html?error=true");
            }
        }
    }
    
    // READ - View all students
    private void viewStudents(HttpServletRequest request, HttpServletResponse response) 
            throws SQLException, ServletException, IOException {
        
        String sql = "SELECT * FROM students";
        List<Student> students = new ArrayList<>();
        
        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            while (rs.next()) {
                Student student = new Student();
                student.setId(rs.getInt("id"));
                student.setName(rs.getString("name"));
                student.setEmail(rs.getString("email"));
                student.setAge(rs.getInt("age"));
                students.add(student);
            }
        }
        
        request.setAttribute("students", students);
        request.getRequestDispatcher("viewStudents.jsp").forward(request, response);
    }
    
    // UPDATE - Show edit form
    private void showEditForm(HttpServletRequest request, HttpServletResponse response) 
            throws SQLException, ServletException, IOException {
        
        int id = Integer.parseInt(request.getParameter("id"));
        String sql = "SELECT * FROM students WHERE id = ?";
        
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            
            if (rs.next()) {
                Student student = new Student();
                student.setId(rs.getInt("id"));
                student.setName(rs.getString("name"));
                student.setEmail(rs.getString("email"));
                student.setAge(rs.getInt("age"));
                
                request.setAttribute("student", student);
                request.getRequestDispatcher("updateStudent.jsp").forward(request, response);
            } else {
                response.sendRedirect("StudentServlet?action=view");
            }
        }
    }
    
    // UPDATE - Update student
    private void updateStudent(HttpServletRequest request, HttpServletResponse response) 
            throws SQLException, IOException {
        
        int id = Integer.parseInt(request.getParameter("id"));
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        int age = Integer.parseInt(request.getParameter("age"));
        
        String sql = "UPDATE students SET name=?, email=?, age=? WHERE id=?";
        
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, name);
            ps.setString(2, email);
            ps.setInt(3, age);
            ps.setInt(4, id);
            
            int rows = ps.executeUpdate();
            
            if (rows > 0) {
                System.out.println("Student updated successfully: ID " + id);
                response.sendRedirect("StudentServlet?action=view&updated=true");
            } else {
                response.sendRedirect("StudentServlet?action=view&error=true");
            }
        }
    }
    
    // DELETE - Delete student
    private void deleteStudent(HttpServletRequest request, HttpServletResponse response) 
            throws SQLException, IOException {
        
        int id = Integer.parseInt(request.getParameter("id"));
        String sql = "DELETE FROM students WHERE id=?";
        
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            
            int rows = ps.executeUpdate();
            
            if (rows > 0) {
                System.out.println("Student deleted successfully: ID " + id);
                response.sendRedirect("StudentServlet?action=view&deleted=true");
            } else {
                response.sendRedirect("StudentServlet?action=view&error=true");
            }
        }
    }
    
    @Override
    public void destroy() {
        try {
            if (conn != null && !conn.isClosed()) {
                conn.close();
                System.out.println("Database connection closed.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    // Inner class for Student entity
    public static class Student {
        private int id;
        private String name;
        private String email;
        private int age;
        
        public int getId() { return id; }
        public void setId(int id) { this.id = id; }
        
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        
        public int getAge() { return age; }
        public void setAge(int age) { this.age = age; }
    }
}