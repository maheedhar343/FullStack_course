### Experiment 3 - Client-Side Form Validation for Bootstrap-Based Shopping Cart Application

To implement JavaScript-based client-side validation for Registration and Login forms in a responsive shopping cart web application using  Bootstrap 5 validation classes .

This ensures data accuracy, improves user experience, and prevents the submission of invalid or incomplete data before it reaches the server.

---

### Steps to Perform

1. Open the Existing Project

Use your Bootstrap-based Shopping Cart project created in  Practical 2 .

Project structure should look like this:

```
bootstrap-shopping-cart/
│
├── index.html
├── register.html
├── login.html
├── css/
│   └── style.css
├── js/
│   └── validation.js
└── image/
```

2. Create a New JavaScript File

Inside the `js/` folder, create a new file named: `validation.js`

This file will contain all validation logic for both forms.

3. Add the Registration Form

In `register.html`, design a responsive form using Bootstrap form controls and layout classes.

![1761061896902](image/ReadMe/1761061896902.png)

4. Add the Login Form

In `login.html`, create a simpler version with only email and password fields.

![1761061858081](image/ReadMe/1761061858081.png)

5. Write JavaScript Validation Logic

In `validation.js`, implement validation checks for both forms.

6. Link the Script

At the end of both `register.html` and `login.html`, link the validation script before `</body>`:

```html
<script src="js/validation.js"></script>
```

7. Test the Validation

Test your forms by entering:

* Empty fields → should show red borders and messages.
* Invalid email → should display a warning.
* Short password → should highlight the field in red.
* Valid inputs → should show success message and reset the form.

<table>
<tr>
<td>
<img src="image/ReadMe/1761062164979.png"></td>
<td>
<img src="image/ReadMe/1761062056932.png"></td>
</tr>
</table>

---
