<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.List" %>
<%@ page import="com.student.controller.StudentServlet.Student" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Students</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 40px 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            padding: 40px;
        }
        
        h2 {
            color: #2d3748;
            margin-bottom: 10px;
            font-size: 32px;
        }
        
        .subtitle {
            color: #718096;
            margin-bottom: 30px;
        }
        
        .alert {
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: none;
        }
        
        .alert-success {
            background: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
        }
        
        .alert-error {
            background: #f8d7da;
            border: 1px solid #f5c6cb;
            color: #721c24;
        }
        
        .top-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        
        .btn {
            padding: 12px 24px;
            font-size: 14px;
            font-weight: 600;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        
        .btn-edit {
            background: #0d6efd;
            color: white;
            padding: 8px 16px;
            font-size: 13px;
        }
        
        .btn-edit:hover {
            background: #0b5ed7;
        }
        
        .btn-delete {
            background: #dc3545;
            color: white;
            padding: 8px 16px;
            font-size: 13px;
        }
        
        .btn-delete:hover {
            background: #bb2d3b;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        thead {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        th {
            padding: 15px;
            text-align: left;
            font-weight: 600;
            font-size: 14px;
        }
        
        td {
            padding: 15px;
            border-bottom: 1px solid #e2e8f0;
            color: #2d3748;
        }
        
        tr:hover {
            background: #f7fafc;
        }
        
        tr:last-child td {
            border-bottom: none;
        }
        
        .actions {
            display: flex;
            gap: 10px;
        }
        
        .no-records {
            text-align: center;
            padding: 40px;
            color: #718096;
            font-size: 18px;
        }
        
        .back-link {
            margin-top: 30px;
            text-align: center;
        }
        
        .back-link a {
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
        }
        
        .back-link a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="top-actions">
            <div>
                <h2>👥 Student Records</h2>
                <p class="subtitle">Manage all student information</p>
            </div>
            <a href="registration.html" class="btn btn-primary">➕ Add New Student</a>
        </div>
        
        <div id="updatedAlert" class="alert alert-success">
            ✓ Student updated successfully!
        </div>
        
        <div id="deletedAlert" class="alert alert-success">
            ✓ Student deleted successfully!
        </div>
        
        <div id="errorAlert" class="alert alert-error">
            ✗ Operation failed. Please try again.
        </div>
        
        <%
            List<Student> students = (List<Student>) request.getAttribute("students");
            if (students != null && !students.isEmpty()) {
        %>
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <% for (Student student : students) { %>
                <tr>
                    <td><%= student.getId() %></td>
                    <td><%= student.getName() %></td>
                    <td><%= student.getEmail() %></td>
                    <td><%= student.getAge() %></td>
                    <td>
                        <div class="actions">
                            <a href="StudentServlet?action=edit&id=<%= student.getId() %>" class="btn btn-edit">✏️ Edit</a>
                            <a href="StudentServlet?action=delete&id=<%= student.getId() %>" 
                               class="btn btn-delete" 
                               onclick="return confirm('Are you sure you want to delete this student?')">🗑️ Delete</a>
                        </div>
                    </td>
                </tr>
                <% } %>
            </tbody>
        </table>
        
        <% } else { %>
        
        <div class="no-records">
            <p>📭 No student records found.</p>
            <p style="margin-top: 10px;">Click "Add New Student" to register students.</p>
        </div>
        
        <% } %>
        
        <div class="back-link">
            <a href="index.html">← Back to Home</a>
        </div>
    </div>
    
    <script>
        window.onload = function() {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('updated') === 'true') {
                document.getElementById('updatedAlert').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('updatedAlert').style.display = 'none';
                }, 5000);
            }
            if (urlParams.get('deleted') === 'true') {
                document.getElementById('deletedAlert').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('deletedAlert').style.display = 'none';
                }, 5000);
            }
            if (urlParams.get('error') === 'true') {
                document.getElementById('errorAlert').style.display = 'block';
            }
        };
    </script>
</body>
</html>