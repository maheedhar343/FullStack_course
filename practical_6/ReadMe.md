### **Experiment 6 - Bookstore XML Creation and Validation Using DTD & XSD**

Develop an XML-based representation of a bookstore and validate it using both  DTD and XSD . This practical focuses on  defining structured data, enforcing rules, and practicing XML validation .

### Steps :

1. Design an XML structure with `<bookstore>` as the root element.
   Create the basic XML document structure with `<bookstore>` as the root element. This will serve as the container for all book entries.

   ```xml
   <?xml version="1.0" encoding="UTF-8"?> <bookstore> <!-- Book entries will be added here --> </bookstore>
   ```
2. Add multiple `<book>` elements with the following:

   * Attributes: `id` (unique for each book)
   * Child elements: `title`, `author`, `genre`, `price`, `publish_date`

   ```xml
   <book id="B001"> 
   <title>Book Title</title> 
   <author>Author Name</author> 
   <genre>Fiction</genre> 
   <price>29.99</price> 
   <publish_date>2024-01-15</publish_date> 
   </book>
   ```
3. Populate the XML with at least 3–5 books using realistic data.
4. Create a DTD file to define the XML structure rules:

   * `<bookstore>` must contain one or more `<book>` elements
   * Each `<book>` must contain all child elements
   * Attribute `id` is required and unique
5. Create an XSD file to enforce:

   * Correct data types for each element (`string`, `decimal`, `date`)
   * Restrict `genre` values to a fixed list (e.g., Fiction, Non-Fiction, Science, Fantasy)
   * Ensure the `id` attribute is unique
6. Validate XML Against DTD and XSD
   Use XML validators to check if the XML document conforms to both DTD and XSD rules.
   ![1761108378395](image/ReadMe/1761108378395.png)

---
