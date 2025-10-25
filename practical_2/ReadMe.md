## **Experiment 2 - Responsive Shopping Cart Application Using Bootstrap 5**

The objective of this experiment is to `enhance the shopping cart web application` developed in `Project 1` by making it `fully responsive` using the  `Bootstrap framework` .

Students will learn how to use `Bootstrap’s grid system, components, and utilities` to create a flexible, mobile-friendly layout for all pages — registration, login, catalog, and cart.

**Steps**

**1: Project Setup**

* Open the shopping cart project created in  `Project 1` .
* Include `Bootstrap CSS CDN links` in all your HTML files (registration, login, catalog, cart).

```
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
```

* Remove or minimize custom CSS where Bootstrap utilities can be used.

**2: Apply Bootstrap Grid System**

* Use Bootstrap’s `container`, `row`, and `col` classes to organize the page layout.
* Define columns for different sections such as navigation, product catalog, and cart summary.
* Make sure all columns are responsive by using appropriate breakpoint classes like:
   * `.col-sm-12` for small screens
   * `.col-md-6` or `.col-lg-4` for larger screens

**3: Style Forms and Buttons**

* Convert all `registration` and `login` forms to Bootstrap forms using:
 * `.form-control` for input fields
 * `.btn`, `.btn-primary`, `.btn-outline-*` for buttons
* Use Bootstrap form groups and spacing utilities for alignment and readability.
* Ensure forms are centered and resize properly on smaller devices.

**4: Design the Navigation Bar**

* Use the `Bootstrap Navbar component` to create a responsive header.
* Include links for:
   * Home / Catalog
   * Cart
   * Login / Logout
* Add the `navbar-toggler` for mobile view to collapse the menu into a hamburger icon.

**5: Style the Catalog and Cart Pages**

* Use `Bootstrap cards` to display product details (image, name, price, and add-to-cart button).
* Apply `Bootstrap grid` to arrange product cards in multiple columns.
* For the cart page:
   * Use `Bootstrap tables` or `list groups` to display selected products.
   * Add buttons for update and delete actions using `.btn-sm` and color classes.

**6: Add Responsiveness and Spacing**

* Test the layout on various screen sizes.
* Use Bootstrap spacing utilities (`.p-*`, `.m-*`, `.mt-*`, `.mb-*`) to manage spacing.
* Use alignment utilities like `.text-center`, `.justify-content-center`, and `.align-items-center`.
* Ensure images, buttons, and text resize gracefully on mobile screens.

---


<table>
  <tr>
    <td><img src="image/ReadMe/1761049348731.png" alt="Desktop View" width="300"></td>
    <td><img src="image/ReadMe/1761049322691.png" alt="Mobile View" width="300"></td>
  </tr>
</table>
