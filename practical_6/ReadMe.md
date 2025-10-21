### **Experiment 6 - Bookstore XML Creation and Validation Using DTD & XSD**

---

## **Task Description**

Develop an **XML-based representation of a bookstore** and validate it using both  **DTD and XSD** . This practical focuses on  **defining structured data, enforcing rules, and practicing XML validation** .

### Steps to Perform:

1. Design an **XML structure** with `<bookstore>` as the root element.
2. Add multiple `<book>` elements with the following:
   * Attributes: `id` (unique for each book)
   * Child elements: `title`, `author`, `genre`, `price`, `publish_date`
3. Populate the XML with at least **3–5 books** using realistic data.
4. Create a **DTD file** to define the XML structure rules:
   * `<bookstore>` must contain **one or more `<book>` elements**
   * Each `<book>` must contain all child elements
   * Attribute `id` is **required** and unique
5. Create an **XSD file** to enforce:
   * Correct **data types** for each element (`string`, `decimal`, `date`)
   * Restrict `genre` values to a **fixed list** (e.g., Fiction, Non-Fiction, Science, Fantasy)
   * Ensure the `id` attribute is unique
6. Validate the XML against both **DTD** and  **XSD** .
7. Correct any errors during validation to make the XML fully  **well-formed and valid** .
8. Optionally, enhance the XML by adding more elements such as **publisher, stock quantity, or category** to extend functionality.

---
