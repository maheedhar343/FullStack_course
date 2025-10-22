<%@ page import="jakarta.servlet.http.*" %>
<%@ page import="jakarta.servlet.*" %>
<html>
<head>
  <title>User Dashboard</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f3e5f5;
      padding: 40px;
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
    h2 {
      color: #9c27b0;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>🏠 User Dashboard</h2>

    <%
      Cookie[] cookies = request.getCookies();
      String cookieUser = null;
      if (cookies != null) {
          for (Cookie c : cookies) {
              if (c.getName().equals("username")) {
                  cookieUser = c.getValue();
              }
          }
      }

      HttpSession session = request.getSession(false);
      String sessionUser = null;
      if (session != null) {
          sessionUser = (String) session.getAttribute("username");
      }
    %>

    <h3>🍪 Cookie User: <%= (cookieUser != null) ? cookieUser : "No cookie found" %></h3>
    <h3>🧠 Session User: <%= (sessionUser != null) ? sessionUser : "No session found" %></h3>

    <br>
    <a href="index.html">⬅ Back to Home</a>
  </div>
</body>
</html>
