package com.session.servlets;

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class SessionServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String username = request.getParameter("username");

        // Create or retrieve session
        HttpSession session = request.getSession();
        session.setAttribute("username", username);

        out.println("<html><body style='font-family:sans-serif;'>");
        out.println("<h2>🧠 Session Started!</h2>");
        out.println("<p>Welcome, <b>" + username + "</b></p>");
        out.println("<p>Session ID: " + session.getId() + "</p>");
        out.println("<a href='dashboard.jsp'>Go to Dashboard</a>");
        out.println("</body></html>");
    }
}
