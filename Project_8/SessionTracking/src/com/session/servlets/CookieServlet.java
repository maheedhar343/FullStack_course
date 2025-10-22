package com.session.servlets;

import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class CookieServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String username = request.getParameter("username");

        // Create a cookie
        Cookie userCookie = new Cookie("username", username);
        userCookie.setMaxAge(60 * 60); // 1 hour
        response.addCookie(userCookie);

        out.println("<html><body style='font-family:sans-serif;'>");
        out.println("<h2>🍪 Cookie Created Successfully!</h2>");
        out.println("<p>Username stored: <b>" + username + "</b></p>");
        out.println("<a href='dashboard.jsp'>Go to Dashboard</a>");
        out.println("</body></html>");
    }
}
